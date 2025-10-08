const express = require('express');
const router = express.Router();

const orderPaymentsHandler = require('./handler/order-payment');


/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     description: Get all orders.
 *     tags:
 *       - Order Payments
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of orders.
 */
router.get('/', orderPaymentsHandler.getOrders);


module.exports = router;