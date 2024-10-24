const loginSignup = () => {
  return (
    <div className="login-sign-page">
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Your password" />
        </div>
        <button>Continue</button>
        <p className="already-have-acount">
          Already have an acount <span>Login Here</span>
        </p>
        <div className="loginSignup-login">
          <input type="checkbox" name="" id="" />
          <p>By continuing i agree to the terms and condition</p>
        </div>
      </div>
    </div>
  );
};

export default loginSignup;
