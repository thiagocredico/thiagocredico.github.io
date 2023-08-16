const { postService } = require('../services');
const { BlogPost } = require('../models');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { userId } = req;
    console.log('id chega aqui', userId);

    const post = await postService.createPost(title, content, categoryIds, userId);
    console.log('post criado chega aqui', post);

    if (!post.message) {
      return res.status(201).json(post);
    }
    res.status(400).json({ message: post.message });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const posts = await postService.getAllPosts();
    console.log('passou pelo postService.getAllPosts');

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.getPostById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updatePostById = async (req, res) => {
  try {
    console.log('entrou no updatePostById');
    const { id } = req.params;
    const { title, content } = req.body;
    const { userId } = req;
    // console.log('id', id, 'title', title, 'content', content);

    const postedUserId = await BlogPost.findByPk(id);

    if (postedUserId.userId !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    const post = await postService.updatePostById(id, title, content);

    if (!post.message) {
      return res.status(200).json(post);
    }

    res.status(400).json({ message: post.message });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req;

    // console.log('entrou no deletePostById');

    const postedUserId = await BlogPost.findByPk(id);

    if (!postedUserId) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    if (postedUserId.userId !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    const post = await postService.deletePostById(id);
    // console.log('post', post);

    if (post.message) {
      return res.status(204).json();
    }
    return;
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const searchPostByQuery = async (req, res) => {
  console.log('entrou no searchPostByQuery');
  try {
    const { q } = req.query;
    console.log('q', q);
    const posts = await postService.searchPostByQuery(q);

    // if (posts.length === 0) {
    //   return res.status(200).json({ message: 'Post does not exist' });
    // }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
  searchPostByQuery,
};
