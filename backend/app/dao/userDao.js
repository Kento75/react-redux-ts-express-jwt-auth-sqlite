const User = require('../model/user');

const daoCommon = require('./commons/daoCommon');

class UserDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * 存在チェック
     * @params username, password
     * returns true or false
     */
    findByAuthUser(username, password) {
        let sqlRequest = "SELECT id, username, password, firstName, lastName, age, imageURL, comment FROM User WHERE username=$username and password=$password";
        let sqlParams = {
            $username: username,
            $password: password
        };
        console.log(sqlParams)
        return this.common.findOne(sqlRequest, sqlParams).then(rows =>{
            let user = [];
            for (const row of rows) {
                user.push(new User(row.id, row.username, row.password, row.firstName, row.lastName, row.age, row.imageURL, row.comment));
            }
            return user;
        });
    }

    /**
     * 検索
     * @params userId
     * @return entity
     */
    findById(userId) {
        let sqlRequest = "SELECT id, username, password, firstName, lastName, age, imageURL, comment FROM User WHERE id=$userId";
        let sqlParams = {$userId: userId};
        return this.common.findOne(sqlRequest, sqlParams).then(rows =>{
            let users = [];
            for (const row of rows) {
                users.push(new User(row.id, row.username, row.password, row.firstName, row.lastName, row.age, row.imageURL, row.comment));
            }
            return users;
        });
    };

    /**
     * 検索(全件)
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM User";
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new User(row.id, row.username, row.password, row.firstName, row.lastName, row.age, row.imageURL, row.comment));
            }
            return users;
        });
    };

    /**
     * 件数(全件)
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM User";
        return this.common.findOne(sqlRequest);
    };

}

module.exports = UserDao;