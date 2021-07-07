import { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { signup } from "./../_services/auth.service";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  function handleSubmit(e) {
    const user = {
      username,
      password,
      confirmPassword,
    };

    if (password === confirmPassword) {
      signup(user);
    } else {
      alert("password and confirm passwords dont match");
    }
  }

  return (
    <div className="columns is-centered">
      <div className="column is-one-third">
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left">
            <input
              className="input is-success"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="icon is-small is-left">
              <AccountCircleIcon />
            </span>
          </div>
          <p className="help is-success">This username is available</p>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon is-small is-left">
              <LockIcon />
            </span>
            <span className="icon is-small is-right">
              {passwordVisibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </div>
          <p className="help is-danger">password help</p>
        </div>

        <div className="field">
          <label className="label">Confirm Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="password"
              placeholder="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
            <span className="icon is-small is-left">
              <LockIcon />
            </span>
            <span className="icon is-small is-right">
              <VisibilityIcon />
            </span>
          </div>
          <p className="help is-danger">The password doesnt match</p>
        </div>

        <div className="field">
          <div className="control">
            <button
              className="button is-link is-fullwidth is-outlined"
              onClick={(e) => handleSubmit(e)}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
