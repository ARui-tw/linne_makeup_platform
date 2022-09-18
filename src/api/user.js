export function register(api, data) {
  return api("POST", "/user/register", data);
}

export function getUser(api, data) {
  return api("POST", "/user/getUser", data);
}

export function modifyUser(api, data) {
  return api("POST", "/user/modifyUser", data);
}

export function getUsers(api, data) {
  return api("POST", "/user/getUsers", data);
}

export function getCurrentUser(api) {
  return api("POST", "/user/getCurrentUser");
}

export function modifyCurrentUser(api, data) {
  return api("POST", "/user/modifyCurrentUser", data);
}

export function removeUser(api, data) {
  return api("POST", "/user/removeUser", data);
}

export function login(api, data) {
  return api("POST", "/user/login", data);
}

export function email(api, data) {
  return api("POST", "/user/email", data);
}
