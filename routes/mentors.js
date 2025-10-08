
const express = require('express');
const router = express.Router();

const mentorsHandler = require('./handler/mentors');


/**
 * @swagger
 * /mentors:
 *   get:
 *     summary: Get all mentors
 *     description: Get all mentors.
 *     tags:
 *       - Mentors
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of mentors.
 */
router.get('/', mentorsHandler.getAll);

/**
 * @swagger
 * /mentors/{id}:
 *   get:
 *     summary: Get a mentor by ID
 *     description: Get a mentor by ID.
 *     tags:
 *       - Mentors
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the mentor to get.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mentor data.
 *       404:
 *         description: Mentor not found.
 */
router.get('/:id', mentorsHandler.get);

/**
 * @swagger
 * /mentors:
 *   post:
 *     summary: Create a new mentor
 *     description: Create a new mentor.
 *     tags:
 *       - Mentors
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: mentor
 *         description: The mentor to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - profile
 *             - email
 *           properties:
 *             name:
 *               type: string
 *             profile:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: Mentor created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', mentorsHandler.create);

/**
 * @swagger
 * /mentors/{id}:
 *   put:
 *     summary: Update a mentor
 *     description: Update a mentor.
 *     tags:
 *       - Mentors
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the mentor to update.
 *         schema:
 *           type: integer
 *       - in: body
 *         name: mentor
 *         description: The mentor to update.
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             profile:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: Mentor updated successfully.
 *       400:
 *         description: Invalid input.
 *       404:
 *         description: Mentor not found.
 */
router.put('/:id', mentorsHandler.update);

/**
 * @swagger
 * /mentors/{id}:
 *   delete:
 *     summary: Delete a mentor
 *     description: Delete a mentor.
 *     tags:
 *       - Mentors
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the mentor to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mentor deleted successfully.
 *       404:
 *         description: Mentor not found.
 */
router.delete('/:id', mentorsHandler.destroy);



module.exports = router;
