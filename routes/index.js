const express = require('express');
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const {validateParams, validateBody} = require('../middlewares/validators');
const {paramsScheme, createUserBodyScheme, logginBodyScheme} = require('../yupSchemes/yupSchemes')
const {hashPassword} = require('../middlewares/hashPassword');
const {checkJwt} = require('../middlewares/jwtMiddleware');

const router = express.Router();

router.get('/user', userController.getAllUsers);
router.get('/user/:id', validateParams(paramsScheme), userController.getUserById);
router.post('/user', validateBody(createUserBodyScheme), hashPassword, userController.createUser);
router.put('/user/:id', validateParams(paramsScheme), userController.updateUser);
router.delete('/user/:id', validateParams(paramsScheme), userController.deleteUser);

router.post('/login', validateBody(logginBodyScheme), userController.login);

router.post('/post', checkJwt, postController.createPost);
router.get('/post', checkJwt, postController.getAllPosts);

module.exports = router;
