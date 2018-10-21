import { IUserAction, UserActionType } from "../actions/UserActions/UserActions"

const user: any = JSON.parse(localStorage.getItem('user'));

export interface IAuthenticationState {
  username?: "";
  password?: "";
  user: {};
  loggedIn: boolean;
  submitted?: boolean;
}

const initialState: IAuthenticationState = user ? { user, loggedIn: true }
                                                : { user: {}, loggedIn: false };

const AuthenticationReducer = (state: IAuthenticationState = initialState, action: IUserAction) => {
  switch (action.type) {
    case UserActionType.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case UserActionType.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case UserActionType.LOGIN_FAILURE:
      return {};
    case UserActionType.LOGOUT:
      return {};
    default:
      return state
  }
};

export default AuthenticationReducer;
