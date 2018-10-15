var authConfig = require('../../config/authConfig.json');
var jwt = require('jsonwebtoken');

/**
 * レスポンスコマンド一覧
 */
class controllerCommon {

    authSuccess(res) {
        return (result) => {
            // ここにjwtロジックを組み込む
            // TODO
            if (result) {
                const token =
                  jwt.sign({ sub: result.id },
                           authConfig.secret,
                           { algorithm: authConfig.algorithm, expiresIn: 60 * 60 * 24 });
                var authResult = { ...result[0], token };
            }
            res.status(200); // Found
            res.json(authResult);
        }
    }

    findSuccess(res) {
        return (result) => {
            console.log(result)
            res.status(200); // Found
            res.json(result);
        }
    }

    existsSuccess(res) {
        return (result) => {
            res.status(200); // Found
            res.json(result);
        }
    }

    editSuccess(res) {
        return () => {
            res.status(201); // Created/Updated/Deleted
            res.json({});
        }
    }

    authError(res) {
        return (error) => {
            console.log(error)
            res.status(401); // authUser Not found
            res.json(error);
        }
    }

    serverError(res) {
        return (error) => {
            res.status(500);
            res.json(error);
        }
    }

    findError(res) {
        return (error) => {
            res.status(404); // Not found
            res.json(error);
        }
    }
}

module.exports = controllerCommon;