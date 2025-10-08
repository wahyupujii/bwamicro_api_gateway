
const express = require('express');
const router = express.Router();

const coursesHandler = require('./handler/courses');

const verifyToken = require('../middlewares/verifyToken');
const can = require('../middlewares/permission');


/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get all courses
 *     description: Get all courses.
 *     tags:
 *       - Courses
 *     responses:
 *       200:
 *         description: A list of courses.
 */
router.get('/', coursesHandler.getAll);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Get a course by ID
 *     description: Get a course by ID.
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the course to get.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Course data.
 *       404:
 *         description: Course not found.
 */
router.get('/:id', coursesHandler.get);

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course
 *     description: Create a new course.
 *     tags:
 *       - Courses
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: course
 *         description: The course to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - certificate
 *             - thumbnail
 *             - type
 *             - status
 *             - price
 *             - level
 *             - description
 *             - mentor_id
 *           properties:
 *             name:
 *               type: string
 *             certificate:
 *               type: boolean
 *             thumbnail:
 *               type: string
 *             type:
 *               type: string
 *               enum: [free, premium]
 *             status:
 *               type: string
 *               enum: [draft, published]
 *             price:
 *               type: integer
 *             level:
 *               type: string
 *               enum: [all-level, beginner, intermediate, advanced]
 *             description:
 *               type: string
 *             mentor_id:
 *               type: integer
 *     responses:
 *       200:
 *         description: Course created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', verifyToken, can('admin'), coursesHandler.create);

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: Update a course
 *     description: Update a course.
 *     tags:
 *       - Courses
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the course to update.
 *         schema:
 *           type: integer
 *       - in: body
 *         name: course
 *         description: The course to update.
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             certificate:
 *               type: boolean
 *             thumbnail:
 *               type: string
 *             type:
 *               type: string
 *               enum: [free, premium]
 *             status:
 *               type: string
 *               enum: [draft, published]
 *             price:
 *               type: integer
 *             level:
 *               type: string
 *               enum: [all-level, beginner, intermediate, advanced]
 *             description:
 *               type: string
 *             mentor_id:
 *               type: integer
 *     responses:
 *       200:
 *         description: Course updated successfully.
 *       400:
 *         description: Invalid input.
 *       404:
 *         description: Course not found.
 */
router.put('/:id', verifyToken, can('admin'), coursesHandler.update);

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Delete a course
 *     description: Delete a course.
 *     tags:
 *       - Courses
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the course to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Course deleted successfully.
 *       404:
 *         description: Course not found.
 */
router.delete('/:id', verifyToken, can('admin'), coursesHandler.destroy);

module.exports = router;
