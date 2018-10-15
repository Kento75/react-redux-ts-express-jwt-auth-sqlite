require('rootpath')();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require('./app/helper/jwt');

// クロスドメインリクエストの許可
const cors = require('cors');
app.use(cors());

// jsonのパーサーを実装
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

/* DB設定の実装 */
const database = require('./app/config/dbConfig');

/* テーブル存在チェック & 無い場合は作成 */
database.init();

/* JWT Auth の実装  */
app.use(jwt());

/* 引数がない場合は、ポート3000で起動 */
const port = process.argv[2] || 3000;
app.listen(port, function () {
    console.log("Server listening on port : " + port);
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* ルート設定 */
const REST_API_ROOT = '/';
app.use(REST_API_ROOT, require('./app/routes/router'));
