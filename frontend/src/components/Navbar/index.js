import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />
            <NavMenu>
                <NavLink to="/" activestyle>
                    Home
                </NavLink>
                <NavLink to="/about" activestyle>
                    About
                </NavLink>
                <NavLink to="/meetthelepros" activestyle>
                    Meet the Lepro's
                </NavLink>
                <NavLink to="/roadmap" activestyle>
                    Roadmap
                </NavLink>
                <NavLink to="/ourteam" activestyle>
                    Our team
                </NavLink>
                <NavLink to="/faq" activestyle>
                    FAQ
                </NavLink>
                <NavLink to="/members" activestyle>
                    Members Only
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;