const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const tokenAuthentication = require('../services/tokenAuthentication');
const connSql = require('../services/mySql')
const smsValidator = require('../services/smsValidation');

router.post('/user',UserController.postUser);
router.get('/user/:id',UserController.getUser);
router.post("/auth",connSql,tokenAuthentication.authenticateUser)
router.get("/logout",tokenAuthentication.verifyJWT,tokenAuthentication.clearToken)

//Rotas SMS
router.post("/sms",connSql,smsValidator.sendSMS)
router.post("/validadeSMS",connSql,smsValidator.validateNumber)

module.exports = router;

