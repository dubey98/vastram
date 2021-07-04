import VisibilityIcon from "@material-ui/icons/Visibility";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";

function SignupForm() {
  return (
    <div className="section is-medium  has-text-weight-light is-size6">
      <div className="columns is-centered">
        <div className="column is-one-third has-text-centered content">
          <p className="has-text-weight-bold">Login Using :</p>
          <nav className="level">
            <div class="level-item has-text-centered">
              <div>
                <p className="heading">Google</p>
                <p className="title">G</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Twitter</p>
                <p className="title">
                  <TwitterIcon color="blue" />
                </p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">facebook</p>
                <p className="title">
                  <FacebookIcon />
                </p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">random</p>
                <p className="title">r</p>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="columns is-centered">
        <div className="column is-one-third">
          <div class="field">
            <label class="label">Username</label>
            <div class="control has-icons-left">
              <input
                class="input is-success"
                type="text"
                placeholder="username"
              />
              <span class="icon is-small is-left">
                <AccountCircleIcon />
              </span>
            </div>
            <p class="help is-success">This username is available</p>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="password"
                placeholder="password"
              />
              <span class="icon is-small is-left">
                <LockIcon />
              </span>
              <span class="icon is-small is-right">
                <VisibilityIcon />
              </span>
            </div>
            <p class="help is-danger">password help</p>
          </div>

          <div class="field">
            <label class="label">Confirm Password</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="password"
                placeholder="password"
              />
              <span class="icon is-small is-left">
                <LockIcon />
              </span>
              <span class="icon is-small is-right">
                <VisibilityIcon />
              </span>
            </div>
            <p class="help is-danger">The password doesnt match</p>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-link is-fullwidth is-outlined">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
