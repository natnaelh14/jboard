import React from "react";
import { StyledNavbar, NavItemLink, Logo } from "./style";
// import Auth from "../../utils/auth";

const Navbar = () => {
  // const Header = () => {
  //     const logout = (event) => {
  //       event.preventDefault();
  //       Auth.logout();
  //     };
  return (
    <StyledNavbar>
      <Logo>
        <img src="./logo.png" alt="" />
      </Logo>
      <div>
      {/* {Auth.loggedIn() ? (
        <>
          <NavItemLink fill>
            {Auth.getProfile().data.username}'s profile
          </NavItemLink>
          <NavItemLink onClick={logout} fill>
            Log in
          </NavItemLink>
        </>
        ) : ( */}
        <>
          <NavItemLink to="/login" fill>
            Log in
          </NavItemLink>
          <NavItemLink to="/signup" fill>
            Sign up
          </NavItemLink>
        </>
        {/* )} */}
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
