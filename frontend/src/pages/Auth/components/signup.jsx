function Signup({onToggle}) {
    return (
      <div >
    <div className="flex bg-secondary main-container">
 
      <div className="flex column center auth-section">
        <div className="flex column between center  auth-form">
          <h1>Log in</h1>
          <input className="auth-inputs" placeholder="E-mail"></input>
          <input className="auth-inputs" placeholder="Password"></input>
          <button className="auth-button" >Log in</button>
        </div>
      </div>
      <div className="flex column center login greeting-section">
        <div className="flex center column greeting between">
          <h1>Welcome Back</h1>
          <p>Log in with your personal details to use all of site featuers</p>
          <button className="auth-button" onClick={() => onToggle()}>Sign up</button>
        </div>
      </div>
    </div>
      </div>
    );
  }
  
  export default Signup;
  