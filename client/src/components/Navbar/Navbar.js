import React from 'react';
import { StyledNavbar, NavItemLink, Logo } from './style';

function Navbar ({children}) {
    return (
        <StyledNavbar>
            <Logo>
                <img src="./logo.png" alt="" />
            </Logo>
            <NavItemLink to='/login' fill>Log in</NavItemLink>
            <NavItemLink to='/signup' fill>Sign up</NavItemLink>
        </StyledNavbar>
    )
}

export default Navbar;