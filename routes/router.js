const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/user/put',UserController.putUser);
router.get('/user/:id',UserController.getUser);
module.exports = router;