const express = require('express');
const userController = require('../controllers/userController');
const {validateParams, validateBody} = require('../middlewares/validators');
const {paramsScheme, createUserBodyScheme} = require('../yupSchemes/yupSchemes')

const router = express.Router();

router.get('/user', userController.getAllUsers);
router.get('/user/:id', validateParams(paramsScheme), userController.getUserById);
router.post('/user', validateBody(createUserBodyScheme), userController.createUser);
router.put('/user/:id', validateParams(paramsScheme), userController.updateUser);
router.delete('/user/:id', validateParams(paramsScheme), userController.deleteUser);

module.exports = router;
