const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Create Post
router.post('/', async (req, res) => {
    const { title, content, author } = req.body;
    const newPost = new Post({ title, content, author });
    await newPost.save();
    res.json(newPost);
});

// Get All Posts
router.get('/', async (req, res) => {
    const posts = await Post.find().populate('author');
    res.json(posts);
});

// Get Single Post
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id).populate('author');
    res.json(post);
});

// Update Post
router.put('/:id', async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(post);
});

// Delete Post
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
});

module.exports = router;
