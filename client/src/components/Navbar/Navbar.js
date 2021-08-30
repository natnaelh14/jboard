import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./header.css";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import LogoImage from "./logo.png";

const Navbar = () => {
  const [showNav, SetshowNav] = useState(false);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <nav className="navbar navbar-background ">
      <div className="navbar-main">
        <Link to='/'>
          <img className="navbar-logo" src={LogoImage} alt="logo" />
        </Link>
        {Auth.loggedIn() ? (
        <>
          <ul className="navbar-list-desktop">
            <li className="dropdown" >
              <span  >{Auth.getUser().data.full_name}</span>
              <div className="dropdown-content">
                <a href="/reset" >Update Password</a>
              </div>  
            </li>
            <li>
              <a href={Auth.getUser().data.resume_url} target="_blank" rel="noopener noreferrer" >Resume</a>
            </li>
            <li>
              <span onClick={logout} >Log out</span>
            </li>
          </ul>
          <span
            className="navbar-mobile-icon"
            onClick={() => SetshowNav((prev) => !prev)}
          >
            {showNav ? <HiOutlineX /> : <HiMenuAlt3 />}
          </span>
          <ul
            className={
              showNav
                ? "navbar-list-mobile navbar-list-mobileShow"
                : "navbar-list-mobile"
            }
          >
            <li>
              <a href='/dasboard' target="_blank" rel="noopener noreferrer" >{Auth.getUser().data.full_name}</a>
            </li>
            <li>
              <a href={Auth.getUser().data.resume_url} target="_blank" rel="noopener noreferrer" >Resume</a>
            </li>
            <li>
              <Link to='/reset' >Update Password</Link>
            </li>
            <li>
              <a href='/' onClick={logout} >Log out</a>
            </li>
          </ul>
        </>
        ) : (
        <>
          <ul className="navbar-list-desktop">
            <li>
              <Link to="/login" >Log in</Link> 
            </li>
            <li>
              <Link to="/signup" >Sign up</Link>
            </li>
          </ul>
          <span
            className="navbar-mobile-icon"
            onClick={() => SetshowNav((prev) => !prev)}
          >
            {showNav ? <HiOutlineX /> : <HiMenuAlt3 />}
          </span>
          <ul
            className={
              showNav
                ? "navbar-list-mobile navbar-list-mobileShow"
                : "navbar-list-mobile"
            }
          >
            <li>
              <Link to="/login" >Log in</Link> 
            </li>
            <li>
              <Link to="/signup" >Sign up</Link>
            </li>
          </ul>
        </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;