const mongoose = require('mongoose');
const {ROLES, STUDENT} = require('../utils/constants');

const userScheme = new mongoose.Schema({
    phone: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        required: true,
        enum: ROLES,
        default: STUDENT,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: false,
    },
    birthDate: {
        type: Date,
        required: false,
    },
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

const User = mongoose.model('User', userScheme);

module.exports = User;
