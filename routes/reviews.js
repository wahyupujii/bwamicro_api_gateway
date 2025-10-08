
const express = require('express');
const router = express.Router();

const reviewsHandler = require('./handler/reviews');


/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Create a new review
 *     description: Create a new review.
 *     tags:
 *       - Reviews
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: review
 *         description: The review to create.
 *         schema:
 *           type: object
 *           required:
 *             - user_id
 *             - course_id
 *             - rating
 *             - note
 *           properties:
 *             user_id:
 *               type: integer
 *             course_id:
 *               type: integer
 *             rating:
 *               type: integer
 *             note:
 *               type: string
 *     responses:
 *       200:
 *         description: Review created successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', reviewsHandler.create);

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Update a review
 *     description: Update a review.
 *     tags:
 *       - Reviews
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the review to update.
 *         schema:
 *           type: integer
 *       - in: body
 *         name: review
 *         description: The review to update.
 *         schema:
 *           type: object
 *           properties:
 *             rating:
 *               type: integer
 *             note:
 *               type: string
 *     responses:
 *       200:
 *         description: Review updated successfully.
 *       400:
 *         description: Invalid input.
 *       404:
 *         description: Review not found.
 */
router.put('/:id', reviewsHandler.update);

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     summary: Delete a review
 *     description: Delete a review.
 *     tags:
 *       - Reviews
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the review to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Review deleted successfully.
 *       404:
 *         description: Review not found.
 */
router.delete('/:id', reviewsHandler.destroy);


module.exports = router;
