const Post = require('../models/Post.model');

async function createPost(req, res, next) {
    const post = req.body;
    try {
        const postModel = new Post(post);
        const createPost = await postModel.save();
        res.send(createPost);
    } catch (e) {
        next(e);
    }
}

async function getAllPosts(req, res, next) {
    const page = parseInt(req.query.page);
    const itemsPerPage = parseInt(req.query.itemsPerPage)
    const offset = itemsPerPage * (page - 1);

    try {
        const posts = await Post.find().skip(offset).limit(itemsPerPage);
        res.send(posts);
    } catch (e) {
        next(e);
    }
}

module.exports = {
    createPost,
    getAllPosts,
}
