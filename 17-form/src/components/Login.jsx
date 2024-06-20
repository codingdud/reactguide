import { useRef, useState } from "react";

export default function Login() {
  const[vaildEmail,SetValidEmail]=useState(false)
  const email=useRef()
  const pass=useRef()
  function handleSubmit(event){
    event.preventDefault()
    const enterEmail=email.current.value
    const enterPass=pass.current.value
    const emailIsValid=enterEmail.includes("@")
    if(!emailIsValid){
      SetValidEmail(true)
      return
    }
    SetValidEmail(false)
    console.log("entered value :",enterEmail)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" 
          type="email" 
          name="email"
          required
          ref={email} />
          <div className="control-error">{vaildEmail&&<p>please enter valid email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" 
          type="password" 
          name="password"
          required
          minLength={6}
          ref={pass} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
