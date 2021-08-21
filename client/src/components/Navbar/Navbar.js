import React from "react";
import { StyledNavbar, NavItemLink, Logo } from "./style";
import Auth from "../../utils/auth";

const Navbar = () => {
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
    return (
      <StyledNavbar>
        <Logo>
          <img src="./logo.png" alt="" to='/dashboard' />
        </Logo>
        <div>
          {Auth.loggedIn() ? (
        <>
          <NavItemLink fill>
            {Auth.getUser().data.username}'s profile
          </NavItemLink>
          <NavItemLink onClick={logout} fill>
            Log out
          </NavItemLink>
        </>
        ) : (
          <>
            <NavItemLink to="/login" fill>
              Log in
            </NavItemLink>
            <NavItemLink to="/signup" fill>
              Sign up
            </NavItemLink>
          </>
          )}
        </div>
      </StyledNavbar>
    );
};

export default Navbar;
