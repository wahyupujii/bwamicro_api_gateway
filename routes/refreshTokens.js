
const express = require('express');
const router = express.Router();

const refreshTokensHandler = require('./handler/refresh-tokens');


/**
 * @swagger
 * /refresh-tokens:
 *   post:
 *     summary: Refresh a token
 *     description: Refresh a token.
 *     tags:
 *       - Refresh Tokens
 *     parameters:
 *       - in: body
 *         name: refreshToken
 *         description: The refresh token to use.
 *         schema:
 *           type: object
 *           required:
 *             - refresh_token
 *             - email
 *           properties:
 *             refresh_token:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: Token refreshed successfully.
 *       400:
 *         description: Invalid input.
 */
router.post('/', refreshTokensHandler.refreshToken)


module.exports = router;
