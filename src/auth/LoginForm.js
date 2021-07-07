import VisibilityIcon from "@material-ui/icons/Visibility";
import { useState } from "react";
import { postLogin } from "./../_services/auth.service";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userNameError, setUserNameError] = useState("");

  function passwordChanged(e) {
    const password = e.target.value;
    validatePassword(password);
    setPassword(password);
  }

  function userNameChanged(userName) {
    setUserName(userName);
  }

  function validatePassword(password) {
    setPasswordError(password);
  }

  function handleSubmit(e) {
    const postData = {
      username: userName,
      password: password,
    };
    postLogin(postData);
  }

  return (
    <div className="columns is-centered">
      <div className="column is-one-quarter is-centered">
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              type="text"
              placeholder="username"
              onChange={(e) => userNameChanged(e.target.value)}
              value={userName}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <p className="help is-success">{userNameError}</p>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="password"
              placeholder="password"
              onChange={(e) => passwordChanged(e)}
              value={password}
            />
            <span className="icon is-small is-left"></span>
            <span className="icon is-small is-right">
              <VisibilityIcon />
            </span>
          </div>
          <p className="help is-danger">{passwordError}</p>
        </div>

        <div className="field">
          <div className="control">
            <button
              className="button is-link is-fullwidth is-outlined"
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
