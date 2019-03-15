import React from 'react';
import { NavLink } from "react-router-dom";

const LoggedOut = () => {
  return(
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink to="/Login"><div className="nav-link">Login</div></NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/SignUp"><div className="nav-link" >SignUp</div></NavLink>
      </li>
    </ul>
  );
};

const LoggedIn = () => {
  return(
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink to="/LogOut"><div className="nav-link" >LogOut</div></NavLink>
      </li>
    </ul>
  );
};

const Navigation = () => {

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand" href="#">Login System</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          { localStorage.getItem('isLoggedIn') ? <LoggedIn/> : <LoggedOut/> }
        </div>
    </nav>
  );
};


export default Navigation;

/*<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="navbar-brand" >Instagram Clone</div>
    {

      localStorage.getItem('isLoggedIn')

      ?
        <ul className="navbar-nav ml-auto">

        <li className="nav-item">
          <NavLink to="/LogOut"><div className="nav-link" >LogOut</div></NavLink>
        </li>
      </ul>
      :
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/"><div className="nav-link">Home</div></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Login"><div className="nav-link">Login</div></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/SignUp"><div className="nav-link" >SignUp</div></NavLink>
          </li>
        </ul>
    }
</nav>*/
