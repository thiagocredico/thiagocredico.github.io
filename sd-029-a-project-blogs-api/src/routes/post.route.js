const postRoute = require('express').Router();
const { postController } = require('../controllers');
const { validateToken, validatePost } = require('../middlerwares');

postRoute.post('/post', validateToken, validatePost, postController.createPost);
postRoute.get('/post/search', validateToken, postController.searchPostByQuery);
postRoute.get('/post', validateToken, postController.getAllPosts);
postRoute.get('/post/:id', validateToken, postController.getPostById);
postRoute.put('/post/:id', validateToken, postController.updatePostById);
postRoute.delete('/post/:id', validateToken, postController.deletePostById);

module.exports = postRoute;