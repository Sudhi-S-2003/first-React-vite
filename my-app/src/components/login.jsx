// import React from 'react'

function Login() {
  return (
    <div className="App">
    <h1>login form</h1>
   
    <div className="form-field">
            <input type="text" id="username" placeholder="Enter Username"/>
    </div>
    <div className="form-field">
      <input type="text" id="password" placeholder="Enter PassWord"/>
    </div>
    <div className="form-field">
    <button>Login</button>
    </div>
    
    <a href="">Forget password</a>
    <div className="line"></div>
   </div> 
  )
}

export default Login