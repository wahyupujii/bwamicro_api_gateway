
const express = require('express');
const router = express.Router();

const myCoursesHandler = require('./handler/my-courses');


/**
 * @swagger
 * /my-courses:
 *   post:
 *     summary: Create a new my course
 *     description: Create a new my course.
 *     tags:
 *       - My Courses
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: myCourse
 *         description: The my course to create.
 *         schema:
 *           type: object
 *           required:
 *             - course_id
 *             - user_id
 *           properties:
 *             course_id:
 *               type: integer
 *             user_id:
 *               type: integer
 *     responses:
 *       200:
 *         description: My course created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', myCoursesHandler.create);

/**
 * @swagger
 * /my-courses:
 *   get:
 *     summary: Get all my courses
 *     description: Get all my courses.
 *     tags:
 *       - My Courses
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of my courses.
 */
router.get('/', myCoursesHandler.get);


module.exports = router;
