import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup  () {
  const [isActive, setActive] = useState("true");
  const [username_login,setUsername_login] = useState(null)
  const [password_login,setPassword_login] = useState(null)
  const [username_signup,setUsername_signup] = useState(null)
  const [password_signup,setPassword_signup] = useState(null)

  function handleLogin(e){
    e.preventDefault()
    const opts ={
      method:'GET',
      header:{
        'Authorization': 'Basic ' + window.btoa(username_login + ":" + password_login)
      },
      // body:JSON.stringify(
      // {
      //     "username":username_login,
      //     "password":password_login
      // })   
    };
    fetch('https://mystoriesbackend.herokuapp.com/login',opts)
    .then(res=>{
      if(res.status ===200)
         return console.log(res.json()),res.json() ;
      else 
        alert('There has been an error!!!')
    })
    .then()
    .catch(error=>{
      console.error('There was an error Logging in!!!',error);
    })
  }

  function handleSignup(){

  }

  const handleToggle = () => {
    setActive(!isActive);
  };
    return (
      <div className="maindiv">
       <p class="tip">Click on button in image container</p>
       <div className={`cont ${isActive ? "s--signup" : ""}`}>
          <div className="form sign-in">
           <h2 className="header2">Welcome back,</h2>


    <form onSubmit = {handleLogin} >
      <label className="signuplabel">
      <span>Username</span>
      <input type="username" value={username_login || ''} onChange = {(e)=> setUsername_login(e.target.value)}/>
    </label>
    <label className="signuplabel">
      <span>Password</span>
      <input type="password" value={password_login || ''} onChange = {(e)=> setPassword_login(e.target.value)}/> 
    </label>
    <button type="submit" className="submit">Sign In</button>
    </form>
    
  </div>
  <div className="sub-cont">
    <div className="img">
      <div className="img__text m--up">
        <h2 className="header2">New here?</h2>
        <p>Sign up and discover great amount of new opportunities!</p>
      </div>
      <div className="img__text m--in">
        <h2>One of us?</h2>
        <p>If you already has an account, just sign in. We've missed you!</p>
      </div>
       
      <div className="img__btn" onClick={handleToggle}>
        <span className="m--up" >Sign Up</span>
        <span className="m--in">Sign In</span>
      </div>
    </div>
    <div className="form sign-up">
      <h2 className="header2">Time to feel like home,</h2>

      <form onSubmit = {handleSignup}>
        <label className="signuplabel">
        <span>Username</span>
        <input type="text" />
      </label>
      <label className="signuplabel">
        <span>Email</span>
        <input type="email" />
      </label>
      <label className="signuplabel">
        <span>Password</span>
        <input type="password" />
      </label>
      <button type="submit" className="submit" >Sign Up</button>
      </form>
      
    </div>
  </div>
</div>
      </div>
    );
}
 
export default Signup;
