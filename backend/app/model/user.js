
class User {
    constructor(id, username, password, firstName, lastName, age, imageURL, comment) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.imageURL = imageURL;
        this.comment = comment;
    }
}

module.exports = User;