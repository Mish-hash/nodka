const Post = require('../models/Post.model');
const User = require('../models/User.model');

async function createPost(req, res, next) {
    const post = req.body;
    try {
        const postModel = new Post(post);
        const createPost = await postModel.save();

        await User.update({_id: createPost.userId}, {$push: {posts: createPost._id}});

        /* const user = await User.findOne({_id: createPost.userId});
        user.posts.push(createPost._id);
        await user.save(); */

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
        const totalCount = await Post.count();
        const posts = await Post.find().populate({path: 'userId', select: 'email _id'}).skip(offset).limit(itemsPerPage);
        res.send({posts, totalCount});
    } catch (e) {
        next(e);
    }
}

module.exports = {
    createPost,
    getAllPosts,
}
