import { UserActionType } from "../actions/UserActions/UserActions";
import { authHeader } from "../helpers/AuthHeader";


// ログイン
export function login(username: string, password: string) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
  };

  return fetch('http://localhost:7777/user/authenticate', requestOptions)
      .then(handleResponse)
      .then(user => {
          if (user.token) {
              localStorage.setItem('user', JSON.stringify(user));
          }

          return user;
      });
}

// ログアウト
export function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

export function getAll() {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };

  return fetch('http://localhost:7777/user/all', requestOptions).then(handleResponse);
}

export function getUserDetailed(userId: string) {
  const requestOptions = {
      method: 'GET',
      headers: authHeader()
  };

  return fetch(`http://localhost:7777/user/find/${userId}`, requestOptions).then(handleResponse);
}

// レスポンスチェック
function handleResponse(response: any) {
  return response.text().then((text: string) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 21) {
//              logout();
//              Location.reload(true);
          }
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }
      return data;
  });
}
