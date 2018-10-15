let sqlite3 = require('sqlite3').verbose();

/*
 * データベース設定
 */

/* DBをロード */
let db = new sqlite3.Database('./sqlite.db');

/* テーブルが存在しない場合は作成 */
let init = function () {
    // user table
    db.run("CREATE TABLE if not exists user (" +
        "id TEXT," +
        " username TEXT," +
        " password TEXT," +
        " firstName TEXT," +
        " lastName TEXT," +
        " age TEXT," +
        " imageURL TEXT," +
        " comment TEXT" +
        ")");
};

module.exports = {
    init: init,
    db: db
};

