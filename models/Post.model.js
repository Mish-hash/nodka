
const mongoose = require('mongoose');
const {ROLES, STUDENT} = require('../utils/constants');

const postScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postScheme);

module.exports = Post;
