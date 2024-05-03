function Login({ onToggle }) {
  return (
    <div className="flex bg-secondary main-container">
      <div className="flex column center greeting-section">
        <div className="flex center column greeting between">
          <h1>Welcome Back</h1>
          <p>Register with your personal details to use all of site featuers</p>
          <button className="auth-button" onClick={() => onToggle()}>Log in</button>
        </div>
      </div>
      <div className="flex column center signup-section">
        <div className="flex column between center  signup-form">
          <h1>Sign Up</h1>
          <input className="auth-inputs" placeholder="E-mail"></input>
          <input className="auth-inputs" placeholder="Password"></input>
          <input className="auth-inputs" placeholder="Confirm Password"></input>
          <button className="auth-button" >Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
