const Store = require("../models/Store") 

const  storeController = {

        index(req,res){
            const {username} = req.body
            const {connection} = req
            let newStore = new Store()
            newStore.setUsername(username)
            connection.query(newStore.getIndex(),(err,rows,index)=>{
                if(!err){
                    return res.status(200).json({stores:rows})
                }
                else{
                    return res.status(401).json({error:err})
                }
            })
        },

        setStore(req,res){
            const {name,user_id} = req.query
            const {connection} = req
            let newStore = new Store()

            newStore.setName(name)
            newStore.setUser_id(user_id)

            connection.query(newStore.setStore(),(err,result)=>{
                if(!err){
                    return res.status(200).json({result})
                }
                else{
                    return res.status(401).json({error:err})
                }
            })




        }


}

module.exports = storeController