const express = require('express');
const { getUserById, getAllUsers } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/', getAllUsers);

userRouter.get('/:id', getUserById);

module.exports = userRouter;
