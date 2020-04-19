class User{
    constructor(options) {
        this.id = options.user_id;
        this.username = options.username;
        this.passwordHash = options.password_hash || options.passwordHash;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
    
    setUsername(username) {
        this.username = username;
    }

    getUsername() {
        return this.username;
    }

    setPasswordHash(passwordHash) {
        this.passwordHash = passwordHash;
    }

    getPasswordHash() {
        return this.passwordHash;
    }
}

module.exports = User;