const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const storeController = require('../controllers/storeController')
const tokenAuthentication = require('../services/tokenAuthentication');
const connSql = require('../services/mySql')
const smsValidator = require('../services/smsValidation');

router.post('/user/put',UserController.putUser);
router.get('/user/:id',UserController.getUser);
router.post("/auth",connSql,tokenAuthentication.authenticateUser)
router.get("/logout",tokenAuthentication.verifyJWT,tokenAuthentication.clearToken)

//Rotas SMS
router.post("/sms",connSql,smsValidator.sendSMS)
router.post("/validadeSMS",connSql,smsValidator.validateNumber)

//Rotas store
router.get("/store",connSql,storeController.index)
router.post("/store",connSql,storeController.setStore)

module.exports = router;

