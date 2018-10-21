import { history } from "../../helpers/history";
import * as userService from "../../services/UserService";

export enum UserActionType {
  // ログイン・ログアウトアクション
  LOGIN_REQUEST = "USERS_LOGIN_REQUEST",
  LOGIN_SUCCESS = "USERS_LOGIN_SUCCESS",
  LOGIN_FAILURE = "USERS_LOGIN_FAILURE",
  LOGOUT = "USERS_LOGOUT",

  // ユーザー一覧取得アクション
  GETALL_REQUEST = "USERS_GETALL_REQUEST",
  GETALL_SUCCESS = "USERS_GETALL_SUCCESS",
  GETALL_FAILURE = "USERS_GETALL_FAILURE",

  // ユーザー詳細情報取得アクション
  DETAILED_REQUEST = "USER_DETAILED_REQUEST",
  DETAILED_SUCCESS = "USER_DETAILED_SUCCESS",
  DETAILED_FAILURE = "USER_DETAILED_FAILURE"
}

export interface IUserAction {
  type: UserActionType;
  user?: {};
  error?: string;
}

export const userActions = {
  login,
}

function login(username: string, password: string) {
  return (dispatch: any) => {
      dispatch(request({ username }));

      userService.login(username, password)
          .then(
              user => {
                  dispatch(success(user));
                  history.push('/');
              },
              error => {
                  dispatch(failure(error));
//                  dispatch(alertActions.error(error));
              }
          );
  };

  function request(user: {}): IUserAction { return { user, type: UserActionType.LOGIN_REQUEST } }
  function success(user: {}): IUserAction { return { user, type: UserActionType.LOGIN_SUCCESS } }
  function failure(error: string): IUserAction { return { error, type: UserActionType.LOGIN_FAILURE } }
}
