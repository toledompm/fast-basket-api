class User{
    constructor(options) {
        this.username = options.username;
        this.passwordHash = options.passwordHash;
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