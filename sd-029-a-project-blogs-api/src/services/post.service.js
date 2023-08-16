const { Op } = require('sequelize');
const { BlogPost, PostCategory, Category, sequelize, User } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  const verifyCategories = await Category.findAll({ where: { id: categoryIds } });

  if (verifyCategories.length !== categoryIds.length) {
    return { message: 'one or more "categoryIds" not found' };
  }

  const newPost = await sequelize.transaction(async (transaction) => {
    const post = await BlogPost.create({ title, content, userId }, { transaction });

    const postCategories = categoryIds.map(async (categoryId) => {
      await PostCategory.create({ postId: post.id, categoryId }, { transaction });
    });

    await Promise.all(postCategories);

    return post;
  });

  return newPost;
};

const getAllPosts = async () => {
  const includedModels = [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ];

  const posts = await BlogPost.findAll({ include: includedModels });

  console.log('Saiu no getAllPosts');
  
  return posts;
};

const getPostById = async (id) => {
  const includedModels = [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ];

  const post = await BlogPost.findByPk(id, { include: includedModels });

  return post;
};

const updatePostById = async (id, title, content) => {
  if (!title || !content) {
    return { message: 'Some required fields are missing' };
  }

  // const post = await BlogPost.findByPk(id);
  // if (post.userId !== userId) {
  //   return { message: 'Unauthorized user' };
  // }

  const updatePostId = await sequelize.transaction(async (transaction) => {
  const postUpdated = await BlogPost.update(
    { title, content },
    { where: { id } },
    { transaction },
    );
    // console.log('postUpdated', postUpdated);
    // await Promise.all(postUpdated);

    return postUpdated;
  });

  // if (!updatePost) {
  //   return { message: 'Post does not exist' };
  // }

  console.log('updatePost', updatePostId);

  return getPostById(id);
};

const deletePostById = async (id) => {
  await sequelize.transaction(async (transaction) => 
  BlogPost.destroy({ where: { id } }, { transaction }));

  return { message: 'Post deleted successfully' };
};

const searchPostByQuery = async (query) => {
  const includedModels = [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ];
console.log('service query', query);
  const posts = await BlogPost.findAll({
    where: { [Op.or]: [
      { title: { [Op.like]: `%${query}%` } },
      { content: { [Op.like]: `%${query}%` } },
    ] },
    include: includedModels,
  });

  console.log('query posts', posts);

  return posts;
};

module.exports = { 
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
  searchPostByQuery,
 };
