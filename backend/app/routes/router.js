/**
 * Express ルート設定
 */
const express = require('express');
const router = express.Router();

/* API ルートエンドポイント */
router.use('/user', require('./api/userRoutes'));

module.exports = router;