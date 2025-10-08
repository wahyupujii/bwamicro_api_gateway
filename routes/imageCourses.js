
const express = require('express');
const router = express.Router();

const imageCoursesHandler = require('./handler/image-courses');


/**
 * @swagger
 * /image-courses:
 *   post:
 *     summary: Create a new image course
 *     description: Create a new image course.
 *     tags:
 *       - Image Courses
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: imageCourse
 *         description: The image course to create.
 *         schema:
 *           type: object
 *           required:
 *             - image
 *             - course_id
 *           properties:
 *             image:
 *               type: string
 *             course_id:
 *               type: integer
 *     responses:
 *       200:
 *         description: Image course created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', imageCoursesHandler.create);

/**
 * @swagger
 * /image-courses/{id}:
 *   delete:
 *     summary: Delete an image course
 *     description: Delete an image course.
 *     tags:
 *       - Image Courses
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the image course to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Image course deleted successfully.
 *       404:
 *         description: Image course not found.
 */
router.delete('/:id', imageCoursesHandler.destroy);


module.exports = router;
