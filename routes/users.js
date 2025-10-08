
const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/users');
const verifyToken = require('../middlewares/verifyToken');


/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with name, email, password, profession, and avatar.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - email
 *             - password
 *             - profession
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             profession:
 *               type: string
 *             avatar:
 *               type: string
 *     responses:
 *       200:
 *         description: User created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/register', usersHandler.register);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login a user
 *     description: Login a user with email and password.
 *     tags:
 *       - Users
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to login.
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Invalid credentials
 */
router.post('/login', usersHandler.login);

/**
 * @swagger
 * /users:
 *   put:
 *     summary: Update a user
 *     description: Update a user's name, email, profession, and avatar.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to update.
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             profession:
 *               type: string
 *             avatar:
 *               type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid input
 */
router.put('/', verifyToken, usersHandler.update);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a user
 *     description: Get a user's data by token.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User data
 *       404:
 *         description: User not found
 */
router.get('/', verifyToken, usersHandler.getUser);

/**
 * @swagger
 * /users/logout:
 *   post:
 *     summary: Logout a user
 *     description: Logout a user by token.
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User logged out successfully
 */
router.post('/logout', verifyToken, usersHandler.logout);


module.exports = router;
