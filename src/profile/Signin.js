function SignIn() {
  return (
    <div>
      <h1>Welcome Back!</h1>
      <form>
        <label>
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          <input type="password" name="password" placeholder="Password" />
        </label>
        <p>Forgot your password?</p>
        <input type="submit" value="Sign In" />
      </form>

      <h1>New Here?</h1>
      <form>
        <label>
          <input type="text" name="first_name" placeholder="First Name" />
        </label>
        <label>
          <input type="text" name="last_name" placeholder="Last Name" />
        </label>
        <label>
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          <input type="password" name="password" placeholder="Password" />
        </label><br></br>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1"> Yes, Sign me up!</label>
        <input type="submit" value="Create" />
      </form>
    </div>
  );
}

export default SignIn;
