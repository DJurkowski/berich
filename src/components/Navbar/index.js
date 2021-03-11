import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo  from '../../images/Logo/Logo.png'; 
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavRoute, NavBtn, NavBtnLink, NavBtnRoute, Img } from './NavbarElements';

const Navbar = ({isHomePage=false, toggle: sideBarToggle, isStockPage=false}) => {

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
                        {isHomePage ? 
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                            : 
                            <NavRoute to="/">About</NavRoute>
                        }
                    </NavItem>
                    <NavItem>
                        {isHomePage ? 
                            <NavLinks to="crypto" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Crypto</NavLinks>
                            : 
                            <NavRoute to="/">Crypto</NavRoute>
                        }
                    </NavItem>
                    <NavItem>
                        {isHomePage ? 
                            <NavLinks to="knowhow" smooth={true} duration={500} spy={true} exact='true' offset={-80}>KnowHow</NavLinks>
                            : 
                            <NavRoute to="/">KnowHow</NavRoute>
                        }
                    </NavItem>
                    <NavItem>
                        {isHomePage ? 
                            <NavLinks to="more" smooth={true} duration={500} spy={true} exact='true' offset={-80}>More</NavLinks>
                            : 
                            <NavRoute to="/">More</NavRoute>
                        }
                    </NavItem>
                    <NavItem>
                        <NavRoute isStockPage={isStockPage} to="/stock">Stock</NavRoute>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    {isHomePage ?
                        <NavBtnLink to="hireme" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Hire Me</NavBtnLink>
                        :
                        <NavBtnRoute to="/">Hire Me</NavBtnRoute>
                    }
                </NavBtn>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;
