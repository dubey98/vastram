import VisibilityIcon from "@material-ui/icons/Visibility";

function LoginForm() {
  return (
    <div className="section is-medium columns is-centered has-text-weight-light is-size6">
      <div className="column is-one-third">
        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-success"
              type="text"
              placeholder="username"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
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
              <i class="fas fa-envelope"></i>
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
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
