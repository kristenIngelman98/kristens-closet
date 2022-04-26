function SignIn() {
  return (
    <div className="signin_layout">
      <h4>Welcome Back!</h4>
      <form>
        <label>
          <input className="reg_input" type="email" name="email" placeholder="Email" />
        </label>
        <label>
          <input className="reg_input" type="password" name="password" placeholder="Password" />
        </label>
        <p>Forgot your password?</p>
        <input className="button_style_submit" type="submit" value="Sign In" />
      </form>

      <h4>New Here?</h4>
      <form>
        <label>
          <input className="reg_input" type="text" name="first_name" placeholder="First Name" />
        </label>
        <label>
          <input className="reg_input" type="text" name="last_name" placeholder="Last Name" />
        </label>
        <label>
          <input className="reg_input" type="email" name="email" placeholder="Email" />
        </label>
        <label>
          <input className="reg_input" type="password" name="password" placeholder="Password" />
        </label><br></br>
        <input type="checkbox" id="sign-me-up" name="vehicle1" value="Bike" />
        <label for="sign-me-up"> Yes, Sign me up!</label><br></br>
        <input className="button_style_submit" type="submit" value="Create" />
      </form>
    </div>
  );
}

export default SignIn;
