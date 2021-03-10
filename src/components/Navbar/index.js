import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo  from '../../images/Logo/Logo.png'; 
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavRoute, NavBtn, NavBtnLink, Img } from './NavbarElements';

const Navbar = ({isHomePage, toggle: sideBarToggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);

        return () => window.removeEventListener('scroll', changeNav);
    }, []);

    const homeToggle = () => {
        scroll.scrollToTop();
    };

    return (
        <Nav scrollNav={scrollNav} isHomePage={isHomePage}>
            <NavContainer>
                <NavLogo to="/" onClick={homeToggle}>
                    <Img src={Logo} alt="BeRich" />
                </NavLogo>
                <MobileIcon onClick={sideBarToggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to={isHomePage ? "about": "/"} smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={isHomePage ? "crypto": "/"} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Crypto</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={isHomePage ? "knowhow": "/"} smooth={true} duration={500} spy={true} exact='true' offset={-80}>KnowHow</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={isHomePage ? "more": "/"} smooth={true} duration={500} spy={true} exact='true' offset={-80}>More</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavRoute to="/stock">Stock</NavRoute>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to={isHomePage ? "hireme": "/"} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Hire Me</NavBtnLink>
                </NavBtn>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;
