const express = require('express');
const router = express.Router();

/* コントローラー実装 */
const UserController = require('../../controller/userController');
const userController = new UserController();

/**
 * ルート設定
 */

// POST
router.post('/authenticate', function (req, res) {
    userController.findByAuthUser(req, res);
});

// GET
router.get('/count', function (req, res) {
    userController.countAll(res);
});

router.get('/find/:userId', function (req, res) {
    userController.findById(req, res);
});

router.get('/all', function (req, res) {
    userController.findAll(res);
});

module.exports = router;