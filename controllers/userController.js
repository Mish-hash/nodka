const User = require('../models/User.model');
const {COACH, STUDENT} = require('../utils/constants');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


let users = [
    {
        name: 'Vasya',
        id: 1,
    },
    {
        name: 'Kolya',
        id: 2,
    },
    {
        name: 'Petya',
        id: 3,
    },
    {
        name: 'HerPojmiKto',
        id: 4,
    }
]


async function getAllUsers(req, res) {
    /* User.find()
        .select('-__v +password')
        .then(users => res.send(users)) */
    try {
        const users = await User.find().populate('posts').select('-__v +password');
        res.send(users);
    } catch (e) {
        res.status(400).send(e)
    }
}

function getUserById(req, res) {
    const id = req.params.id;
    User.findOne({_id: id})
        .then(user => {
            if(user) {
                return res.send(user);
            }
            res.status(404).send('User not found');
        })
        .catch(err => res.status(400).send(err))
}

function createUser(req, res) {
    const body = req.body;
    const userModel = new User(body);
    userModel
        .save()
        .then(savedUser => res.send(savedUser))
        .catch(err => res.status(400).send(err))
}

async function updateUser(req, res, next) {
    const id = req.params.id;
    const body = req.body;
    delete req.body.password;
    delete req.body.email;
    delete req.body.phone;
    try {
        const updatedUser = await User.updateOne({_id: id}, body, {runValidators: true});
        res.send(updatedUser);
    } catch (e) {
        next(e);
    }
}

async function deleteUser(req, res, next) {
    const id = req.params.id;
    try {
        const {deletedCount} = await User.deleteOne({_id: id});
        if (deletedCount <= 0) {
            return next(new Error('Operation not success'));
        }
        res.send(id);
    } catch (e) {
        next(e);
    }
}

async function login(req, res, next) {
    const email = req.body.email;
    const passwordToCompare = req.body.password;
    try {
        const user = await User.findOne({email}).select('+password');
        if(!user) {
            return next(new Error('Email or password is invalid'));
        }
        const isPasswordValid = await bcrypt.compare(passwordToCompare, user.password);
        if(isPasswordValid) {
            delete user.password;
            const token = await jwt.sign({id: user._id}, 'my secret key', {expiresIn: '1h'});
            return res.send({user, token});
        }
        next(new Error('Email or password is invalid'));
    } catch (e) {
        next(e);
    }
}

//CRUD

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    login,
}
