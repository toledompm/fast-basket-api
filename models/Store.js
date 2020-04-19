class Store{
    constructor() {
        this.username = null;
        this.name = null;
        this.user_id = null;
    }

    setUsername(username){
        this.username = username
    }

    setName(name){
        this.name = name
    }

    setUser_id(user_id){
        this.user_id = user_id
    }

    getIndex(){
        return `SELECT * FROM store where user_id = '${this.username}'`
    }

    setStore(){
        return `INSERT INTO store(user_id,name) VALUES(${this.user_id},'${this.name}')`
    }



}

module.exports = Store