const userDao = require('../dao/userDao');

/* コマンド一覧を実装 */
const ControllerCommon = require('./common/controllerCommon');

const User = require('../model/user');

class UserController {

    constructor() {
        this.userDao = new userDao();
        this.common = new ControllerCommon();
    }

    /**
     * 検索
     * @params req, res
     * @return entity
     */
    findByAuthUser(req, res) {
        let username = req.body.username;
        let password = req.body.password;
          this.userDao.findByAuthUser(username, password)
              .then(this.common.authSuccess(res))
              .catch(this.common.authError(res));
      };

    /**
     * 検索
     * @params req, res
     * @return entity
     */
    findById(req, res) {
      let userId = req.params.userId;
      console.log(userId)
        this.userDao.findById(userId)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * 全件検索
     * @return all entities
     */
    findAll(res) {
        this.userDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * 全件合計
     * @return count
     */
    countAll(res) {

        this.userDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };
}

module.exports = UserController;