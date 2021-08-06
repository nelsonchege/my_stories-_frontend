import './Details.css';
import axios from "axios";
import React, { useState } from "react";

function Details (){
  const [username,setUsername] = useState(null)
  const [email,setEmail] = useState(null)
  const [phone_number,setPhone_number] = useState(null)
  const [first_name,setFirst_name] = useState(null)
  const [second_name,setSecond_name] = useState(null)
  const [radio,setRadio] = useState(null)
  const [birthday,setBirthday] = useState(null)
  function handleDetails(e){
    e.preventDefault()
    axios.post('http://127.0.0.1:5000/createprofile',{
      'username' : username,
      'phone_number' : phone_number,
      'email' : email,
      'first_name': first_name,
      'second_name' : second_name,
      'birthday' : birthday,
      'radio': radio
    })
    .then(console.log('new profile created'))
    .catch(err=> console.error('no profile created',err))

  }
    return ( 
<div className="main_div">
<div className="signup-container">
<div className="left-container">
  <div className="exit">
    <button id="exit">
      <i className="fa fa-car"></i>
    </button>

  </div>
</div>
<form onSubmit = {handleDetails} >
  <div className="right-container">
<header>
<h1>profile </h1>
<div className="set">
<div className="username">
  <label for="username">username</label>
  <input  placeholder="username" type="username" value={username || ''} onChange = {(e)=> setUsername(e.target.value)}></input>
</div>
</div>
<div className="set">
  <div className="firstName">
    <label for="firstName"> first Name</label>
    <input placeholder="first Name" type="first_name" value={first_name || ''} onChange = {(e)=> setFirst_name(e.target.value)}></input>
  </div>
  <div className="secondName">
    <label for="secondName"> second Name</label>
    <input placeholder="second Name" type="second_name" value={second_name || ''} onChange = {(e)=> setSecond_name(e.target.value)}></input>
  </div>
</div>
<div className="set">
<div className="Gender">
  <label for="Gender-female">Gender</label>
  <div className="radio-container">
    <input id="Gender-female" name="Gender" type="radio" value={radio || 'female'} onChange = {(e)=> setRadio(e.target.value)}></input>
    <label for="Gender-female">Female</label>
    <input id="Gender-male" name="Gender" type="radio" value={radio || 'male'} onChange = {(e)=> setRadio(e.target.value)}></input>
    <label for="Gender-male">Male</label>
  </div>
</div>
<div className="birthday">
  <label for="birthday">Birthday</label>
  <input placeholder="MM/DD/YYYY" type="birthday" value={birthday || ''} onChange = {(e)=> setBirthday(e.target.value)}></input>
</div>
</div>
<div className="set">
  <div class="phoneNumber">
    <label for="phoneNumber">phone Number</label>
    <input placeholder="phone Number" type="phone_number" value={phone_number || ''} onChange = {(e)=> setPhone_number(e.target.value)}></input>
  </div>
  <div className="email">
    <label for="email">email</label>
    <input placeholder="email" type="email" value={email || ''} onChange = {(e)=> setEmail(e.target.value)}></input>
  </div>
</div>
</header>
<footer>
<div className="set">
<button type="submit" >save</button>
</div>
</footer>
</div>
</form>
</div>
 </div>
     );
}
 
export default Details;
