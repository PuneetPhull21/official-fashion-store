export function authHeader() {
  // return the token from the localstorage
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    return { Authoriztion: "bearer" + user.token };
  } else {
    return {};
  }
}
