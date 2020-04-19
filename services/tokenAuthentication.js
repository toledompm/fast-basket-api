const jwt = require('jsonwebtoken')
const env = require("dotenv").config()

function authenticateUser(req,res) {
    const {name,pwd} = req.body
    const {connection} = req

    queryString = `SELECT * FROM FAST_BASKET.user WHERE username='${name}' and  password_hash = '${pwd}' `
    connection.query(queryString,function(err, rows, fields) {
        if(!err){

            const token = jwt.sign({id:rows[0].user_id},env.parsed.JWT_KEY)
            return res.status(200).json({auth:true,result:token})
        }
        else{
            console.log(err)
        }
        
    })
}

function clearToken(req,res) {
    res.status(200).json({auth:false,result:null})
}

function verifyJWT(req,res){
    const token = req.header['x-access-token']
    if(!token){
        return res.status(401).send({auth:false,Message:"No token seted"})
    }
    jwt.verify(token,env.parsed.JWT_KEY,(err,decoded) => {
        if(err) return res.status(500).send({auth:false,Message:"Failed to authenticate token"})

        req.userId = decoded.id;
    })
    next()
}

module.exports = {authenticateUser,clearToken,verifyJWT}