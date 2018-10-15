/** データベースのロードと
*  データベースコンフィグの適用
*/
const database = require('../../config/dbConfig');

/* 非同期処理にBlueBirdを実装 */
const Promise = require('bluebird');

/* Daoエラーの設定 */
const DaoError = require('./daoError');

/**
 * DAOコマンド一覧
 */
class Common {

    findAll(sqlRequest) {
        return new Promise(function (resolve, reject) {
            database.db.all(sqlRequest, function (err, rows) {
                if (err) {
                    reject(
                        new DaoError(20, "Internal server error")
                    );
                } else if (rows === null || rows.length === 0) {
                    reject(
                        new DaoError(21, "Entity not found")
                    );
                } else {
                    resolve(rows);
                }
            })
        });
    }

    findOne(sqlRequest, sqlParams) {
        return new Promise(function (resolve, reject) {
            let stmt = database.db.prepare(sqlRequest);
            stmt.all(sqlParams, function (err, rows) {
                if (err) {
                    reject(
                        new DaoError(11, "Invalid arguments")
                    );
                } else if (rows === null || rows.length === 0) {
                    reject(
                        new DaoError(21, "Entity not found")
                    );
                } else {
                    resolve(rows);
                }
            })
        });
    }

    existsOne(sqlRequest, sqlParams) {
        return new Promise(function (resolve, reject) {
            let stmt = database.db.prepare(sqlRequest);
            stmt.each(sqlParams, function (err, row) {
                if (err) {
                    reject(
                        new DaoError(20, "Internal server error")
                    );
                } else if (row && row.found === 1) {
                    resolve(true);
                } else {
                    reject(
                        new DaoError(21, "Entity not found")
                    );
                }
            })
        });
    }

    run(sqlRequest, sqlParams) {
        return new Promise(function (resolve, reject) {
            let stmt = database.db.prepare(sqlRequest);
            stmt.run(sqlParams, function (err) {
                if (this.changes === 1) {
                    resolve(true);
                } else if (this.changes === 0) {
                    reject(
                        new DaoError(21, "Entity not found")
                    )
                } else {
                    console.log(err);
                    reject(
                        new DaoError(11, "Invalid arguments")
                    )
                }
            })
        });
    }
}

module.exports = Common;