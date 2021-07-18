import { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { signup } from "./../services/auth.service";
import { useHistory } from "react-router-dom";

function SignupForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  async function handleSubmit(e) {
    cleanAllErrorFields();
    if (!isInputValid()) {
      return;
    }
    const postData = {
      email,
      password,
      confirmPassword,
    };
    const res = await signup(postData);
    if (res && res.success === false) {
      handleError(res.error);
    }
    if (res.success === true) {
      localStorage.setItem("token", res.token);
      history.push("/");
    }
    return;
  }

  function handlePasswordVisibility(e) {
    setPasswordVisibility(!passwordVisibility);
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
          case "confirmPassword":
            setConfirmPasswordError(error.msg);
            break;
          default:
            break;
        }
      }
    }
  }

  function cleanAllErrorFields() {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  }

  function isInputValid() {
    let retVal = true;

    let ele = document.createElement("input");
    ele.type = "email";
    ele.value = email;
    if (ele.validity.typeMismatch) {
      setEmailError("Please input an email address");
      retVal = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("The passwords dont match");
      retVal = false;
    }

    return retVal;
  }

  return (
    <div className="columns is-centered">
      <div className="column is-3">
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              className={emailError === "" ? "input" : "input is-danger"}
              type="email"
              placeholder="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="icon is-small is-left">
              <AccountCircleIcon />
            </span>
          </div>
          <p className="help is-danger">{emailError}</p>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left">
            <input
              className={passwordError === "" ? "input" : "input is-danger"}
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="icon is-small is-left">
              <LockIcon />
            </span>
          </div>
          <p className="help is-danger">{passwordError}</p>
        </div>

        <div className="field">
          <label className="label">Confirm Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className={
                confirmPasswordError === "" ? "input" : "input is-danger"
              }
              type={passwordVisibility ? "text" : "password"}
              placeholder="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
            <span className="icon is-small is-left">
              <LockIcon />
            </span>
            <span
              className="icon is-small is-right"
              style={{ pointerEvents: "all" }}
              onClick={handlePasswordVisibility}
            >
              {passwordVisibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </span>
          </div>
          <p className="help is-danger">{confirmPasswordError}</p>
        </div>

        <div className="field">
          <div className="control">
            <button
              className="button is-link is-fullwidth is-outlined"
              onClick={async (e) => await handleSubmit(e)}
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
