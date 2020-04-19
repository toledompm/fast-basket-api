const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const tokenAuthentication = require('../services/tokenAuthentication');
const connSql = require('../services/mySql')

router.post('/user/put',UserController.putUser);
router.get('/user/:id',UserController.getUser);
router.post("/auth",connSql,tokenAuthentication.authenticateUser)
router.get("/logout",tokenAuthentication.verifyJWT,tokenAuthentication.clearToken)
