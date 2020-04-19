const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const tokenAuthentication = require('../services/tokenAuthentication');
const connSql = require('../services/mySql')
const smsValidator = require('../services/smsValidation');

router.post('/user/put',UserController.putUser);

//Rotas para autenticação e logout do sistema
router.post("/auth",connSql,tokenAuthentication.authenticateUser)
router.get("/logout",tokenAuthentication.verifyJWT,tokenAuthentication.clearToken)

//Rotas SMS
router.post("/sms",connSql,smsValidator.sendSMS)
router.post("/validadeSMS",connSql,smsValidator.validateNumber)

