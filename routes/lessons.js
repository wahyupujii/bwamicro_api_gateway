
const express = require('express');
const router = express.Router();

const lesssonsHandler = require('./handler/lessons');


/**
 * @swagger
 * /lessons:
 *   post:
 *     summary: Create a new lesson
 *     description: Create a new lesson.
 *     tags:
 *       - Lessons
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: lesson
 *         description: The lesson to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - video
 *             - chapter_id
 *           properties:
 *             name:
 *               type: string
 *             video:
 *               type: string
 *             chapter_id:
 *               type: integer
 *     responses:
 *       200:
 *         description: Lesson created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', lesssonsHandler.create);

/**
 * @swagger
 * /lessons/{id}:
 *   put:
 *     summary: Update a lesson
 *     description: Update a lesson.
 *     tags:
 *       - Lessons
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the lesson to update.
 *         schema:
 *           type: integer
 *       - in: body
 *         name: lesson
 *         description: The lesson to update.
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             video:
 *               type: string
 *             chapter_id:
 *               type: integer
 *     responses:
 *       200:
 *         description: Lesson updated successfully.
 *       400:
 *         description: Invalid input.
 *       404:
 *         description: Lesson not found.
 */
router.put('/:id', lesssonsHandler.update);

/**
 * @swagger
 * /lessons/{id}:
 *   delete:
 *     summary: Delete a lesson
 *     description: Delete a lesson.
 *     tags:
 *       - Lessons
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the lesson to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lesson deleted successfully.
 *       404:
 *         description: Lesson not found.
 */
router.delete('/:id', lesssonsHandler.destroy);

/**
 * @swagger
 * /lessons/{id}:
 *   get:
 *     summary: Get a lesson by ID
 *     description: Get a lesson by ID.
 *     tags:
 *       - Lessons
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the lesson to get.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lesson data.
 *       404:
 *         description: Lesson not found.
 */
router.get('/:id', lesssonsHandler.get);

/**
 * @swagger
 * /lessons:
 *   get:
 *     summary: Get all lessons
 *     description: Get all lessons.
 *     tags:
 *       - Lessons
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of lessons.
 */
router.get('/', lesssonsHandler.getAll);



module.exports = router;
