import config from "../config";

export async function postLogin(postData) {
  return await fetch(`${config.baseURL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      return result;
    });
}

export async function signup(postData) {
  return await fetch(`${config.baseURL}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      return result;
    });
}
