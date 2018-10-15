/**
 * Dao エラー
 */

class DaoError {
    constructor(errorCode, message) {
        this.errorCode = errorCode;
        this.message = message;
    }
}

module.exports = DaoError;