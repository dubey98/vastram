import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useState } from "react";
import { postLogin } from "./../_services/auth.service";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  function passwordChanged(e) {
    const password = e.target.value;
    setPassword(password);
  }

  function emailChanged(email) {
    setEmail(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      email: email,
      password: password,
    };
    const res = await postLogin(postData);

    if (res && res.success === false) {
      handleError(res.error);
      return;
    }
    if (res.success === true) {
      localStorage.setItem("token", res.token);
      history.push("/");
    }
  }

  function handleError(errors) {
    if (Array.isArray(errors) && errors.length > 0) {
      for (let error of errors) {
        switch (error.param) {
          case "email":
            setEmailError(error.msg);
            break;
          case "password":
            setPasswordError(error.msg);
            break;
          default:
            break;
        }
      }
    }
  }

  function handlePasswordVisibility(e) {
    setPasswordVisibility(!passwordVisibility);
  }

  return (
    <div className="hero-body columns is-centered">
      <div className="column is-one-quarter is-centered">
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className={emailError === "" ? "input" : "input is-danger"}
              type="email"
              placeholder="john.doe@example.com"
              onChange={(e) => emailChanged(e.target.value)}
              value={email}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <p className="help is-success">{emailError}</p>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className={passwordError === "" ? "input" : "input is-danger"}
              type={passwordVisibility ? "text" : "password"}
              placeholder="password"
              onChange={(e) => passwordChanged(e)}
              value={password}
            />
            <span
              className="icon is-small is-left"
              style={{ pointerEvents: "all" }}
            ></span>
            <div
              className="icon is-small is-right"
              onClick={handlePasswordVisibility}
              style={{ pointerEvents: "all" }}
            >
              {passwordVisibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
          <p className="help is-danger">{passwordError}</p>
        </div>

        <div className="field">
          <div className="control">
            <button
              className="button is-link is-fullwidth is-outlined"
              onClick={async (e) => await handleSubmit(e)}
              type="submit"
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
