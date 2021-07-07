import config from "../config";

export function postLogin(postData) {
  fetch(`${config.baseURL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
}

export function signup(postData) {
  fetch(`${config.baseURL}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
}
