import React, { useState, useEffect, useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo  from '../../images/Logo/Logo.png'; 
import { animateScroll as scroll, scroller } from 'react-scroll';
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavRoute, NavBtn, NavBtnLink, NavBtnRoute, Img } from './NavbarElements';
import { Context } from '../../utils/Context/Context';

const Navbar = ({isHomePage=false, toggle: sideBarToggle, isstockpage="false"}) => {

    const [scrollNav, setScrollNav] = useState(false);
    const [context, setContext] = useContext(Context);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);

        if(context !== '') {
            scroller.scrollTo(`${context}`, {
                duration: 500,
                delay: 0,
                smooth: true
            });
            setContext('');
        }

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
                            <NavRoute to="/" onClick={() => setContext('about')}>About</NavRoute>
                        }
                    </NavItem>
                    <NavItem>
                        {isHomePage ? 
                            <NavLinks to="crypto" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Crypto</NavLinks>
                            : 
                            <NavRoute to="/" onClick={() => setContext('crypto')}>Crypto</NavRoute>
                        }
                    </NavItem>
                    <NavItem>
                        {isHomePage ? 
                            <NavLinks to="knowhow" smooth={true} duration={500} spy={true} exact='true' offset={-80}>KnowHow</NavLinks>
                            : 
                            <NavRoute to="/" onClick={() => setContext('knowhow')}>KnowHow</NavRoute>
                        }
                    </NavItem>
                    <NavItem>
                        {isHomePage ? 
                            <NavLinks to="more" smooth={true} duration={500} spy={true} exact='true' offset={-80}>More</NavLinks>
                            : 
                            <NavRoute to="/" onClick={() => setContext('more')}>More</NavRoute>
                        }
                    </NavItem>
                    <NavItem>
                        <NavRoute isstockpage={isstockpage} to="/stock">Stock</NavRoute>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    {isHomePage ?
                        <NavBtnLink to="hireme" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Hire Me</NavBtnLink>
                        :
                        <NavBtnRoute to="/" onClick={() => setContext('hireme')}>Hire Me</NavBtnRoute>
                    }
                </NavBtn>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;
