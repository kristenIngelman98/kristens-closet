function SignUp() {
  return (
    <div>
      <h1>New Here?</h1>
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
    </div>
  );
}

export default SignUp;
