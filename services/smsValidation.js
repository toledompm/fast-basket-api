const AWS = require('aws-sdk')
require('dotenv').config()

function sendSMS(req,res){
    const {phone} = req.body
    const {connection} = req    
    const  validator = Math.floor(1000 + Math.random() * 9000);

    AWS.config.update({region:'us-east-1'})


    queryString = `INSERT INTO validate_number(number,status,code) values ('${phone}','400','${validator}')`
    connection.query(queryString)
    var params = {
        Message: `Código de validação:${validator}`, /* required */
        PhoneNumber:phone,
      };

    const setSMSTypePromise = new AWS.SNS({apiVersion: '2010-03-31'});
    setSMSTypePromise.publish(params).promise()

    return res.json({status:200})
}

function validateNumber(req,res) {
    const {validationNumber} = req.body
    const {connection} = req
    
    queryString = `SELECT * FROM FAST_BASKET.validate_number where code = '${validationNumber}' and status = '400'`
    connection.query(queryString,(err,rows,fields)=>{
        if(!err){
            if(rows[0] != undefined){
                insertString = `UPDATE validate_number SET status = '200' where code = '${validationNumber}' and status = '400'`
                connection.query(insertString)
                return res.json({validated:true})
            }
            else{
                return res.json({message:"Code not exists"})
            }
        }
        else{
            return res.json({validated:false})
        }
    })



}

module.exports = {sendSMS,validateNumber}