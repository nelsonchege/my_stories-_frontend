import './Details.css';

function Details (){
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
<div className="right-container">
<header>
<h1>profile </h1>
<div className="set">
<div className="username">
  <label for="username">username</label>
  <input  placeholder="username" type="text"></input>
</div>
<div className="user-photo">
  <button id="user-upload">

    <i className="fa fa-car"></i>
  </button>
  <label for="user-upload">Upload a photo</label>
</div>
</div>
<div className="set">
  <div className="firstName">
    <label for="firstName"> first Name</label>
    <input placeholder="first Name" type="text"></input>
  </div>
  <div className="secondName">
    <label for="secondName"> second Name</label>
    <input placeholder="second Name" type="text"></input>
  </div>
</div>
<div className="set">
<div className="Gender">
  <label for="Gender-female">Gender</label>
  <div className="radio-container">
    <input id="Gender-female" name="Gender" type="radio" value="female"></input>
    <label for="Gender-female">Female</label>
    <input id="Gender-male" name="Gender" type="radio" value="male"></input>
    <label for="Gender-male">Male</label>
  </div>
</div>
<div className="birthday">
  <label for="birthday">Birthday</label>
  <input placeholder="MM/DD/YYYY" type="text"></input>
</div>
</div>
<div className="set">
  <div class="phoneNumber">
    <label for="phoneNumber">phone Number</label>
    <input placeholder="phone Number" type="text"></input>
  </div>
  <div className="email">
    <label for="email">email</label>
    <input placeholder="email" type="text"></input>
  </div>
</div>
</header>
<footer>
<div className="set">
<button id="back">update</button>
<button id="next">save</button>
</div>
</footer>
</div>
</div>
 </div>
     );
}
 
export default Details;