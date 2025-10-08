const express = require('express');
const router = express.Router();

const webhookHandler = require('./handler/webhook');


/**
 * @swagger
 * /webhook:
 *   post:
 *     summary: Webhook for payment gateway
 *     description: Webhook for payment gateway.
 *     tags:
 *       - Webhook
 *     parameters:
 *       - in: body
 *         name: webhook
 *         description: The webhook payload.
 *         schema:
 *           type: object
 *     responses:
 *       200:
 *         description: Webhook received successfully.
 */
router.post('/', webhookHandler.webhook);


module.exports = router;