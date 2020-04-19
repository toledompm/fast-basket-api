const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/user/put',UserController.putUser);

module.exports = router;