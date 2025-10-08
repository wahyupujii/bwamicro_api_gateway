
const express = require('express');
const router = express.Router();

const chaptersHandler = require('./handler/chapters');


/**
 * @swagger
 * /chapters:
 *   post:
 *     summary: Create a new chapter
 *     description: Create a new chapter.
 *     tags:
 *       - Chapters
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: chapter
 *         description: The chapter to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - course_id
 *           properties:
 *             name:
 *               type: string
 *             course_id:
 *               type: integer
 *     responses:
 *       200:
 *         description: Chapter created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', chaptersHandler.create);

/**
 * @swagger
 * /chapters/{id}:
 *   put:
 *     summary: Update a chapter
 *     description: Update a chapter.
 *     tags:
 *       - Chapters
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the chapter to update.
 *         schema:
 *           type: integer
 *       - in: body
 *         name: chapter
 *         description: The chapter to update.
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             course_id:
 *               type: integer
 *     responses:
 *       200:
 *         description: Chapter updated successfully.
 *       400:
 *         description: Invalid input.
 *       404:
 *         description: Chapter not found.
 */
router.put('/:id', chaptersHandler.update);

/**
 * @swagger
 * /chapters/{id}:
 *   delete:
 *     summary: Delete a chapter
 *     description: Delete a chapter.
 *     tags:
 *       - Chapters
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the chapter to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chapter deleted successfully.
 *       404:
 *         description: Chapter not found.
 */
router.delete('/:id', chaptersHandler.destroy);

/**
 * @swagger
 * /chapters/{id}:
 *   get:
 *     summary: Get a chapter by ID
 *     description: Get a chapter by ID.
 *     tags:
 *       - Chapters
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the chapter to get.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chapter data.
 *       404:
 *         description: Chapter not found.
 */
router.get('/:id', chaptersHandler.get);

/**
 * @swagger
 * /chapters:
 *   get:
 *     summary: Get all chapters
 *     description: Get all chapters.
 *     tags:
 *       - Chapters
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of chapters.
 */
router.get('/', chaptersHandler.getAll);


module.exports = router;
