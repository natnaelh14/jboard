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
            <li>
              <a href={Auth.getUser().data.resume_url} target="_blank" >Resume</a>
            </li>
            <li>
              <Link><a  >{Auth.getUser().data.username}</a></Link>
            </li>
            <li>
              <Link><a onClick={logout} >Logout</a></Link>
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
              <a href={Auth.getUser().data.resume_url} target="_blank" >Resume</a>
            </li>
            <li>
              <a>{Auth.getUser().data.username}</a>
            </li>
            <li>
              <Link onClick={logout} >Logout</Link>
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