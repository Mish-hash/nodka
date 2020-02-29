const User = require('../models/User.model');
const {COACH, STUDENT} = require('../utils/constants');

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
        const users = await User.find().select('-__v +password');
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

function updateUser(req, res) {
    const id = parseInt(req.params.id);
    const body = req.body;
    users = users.map((item) => {
        if(item.id === id) {
            return {...item, ...body}
        }
        return item
    })
    res.send(body);
}

function deleteUser(req, res) {
    const id = parseInt(req.params.id);
    users = users.filter((item) => item.id !== id);
    res.send('' + id);
}

//CRUD

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}
