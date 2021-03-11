import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

const activeClassName = "nav-item-active";


export const Nav = styled.nav`
    background: ${({scrollNav, isHomePage}) => (isHomePage ? (scrollNav ? '#0d0d0d' : 'transparent'): '#0d0d0d' )};
    height: 80px;
    margin-top: ${({isHomePage}) => (isHomePage ? '-80px' : '0')};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const Img = styled.img`
    width: 100%;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        color: #fff;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #06DE9C;
    }
`;

export const NavRoute = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    border-bottom: ${({isStockPage}) => (isStockPage ? '3px solid #06DE9C': 'none')};

    &.active {
        border-bottom: 3px solid #06DE9C;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkS)`
    border-radius: 50px;
    background: #06DE9C;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const NavBtnRoute = styled(LinkR)`
    border-radius: 50px;
    background: #06DE9C;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;