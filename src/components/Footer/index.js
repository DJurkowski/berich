import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItem, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons,  SocialIconLink, SocialLogoImg } from './FooterElements';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from '../../images/Logo/Logo.png';

const Footer = ({ isHomePage }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to={isHomePage ? 'about' : '/'}>How it works</FooterLink>
                            <FooterLink to={isHomePage ? 'about' : '/'}>Testimonials</FooterLink>
                            <FooterLink to={isHomePage ? 'about' : '/'}>Careers</FooterLink>
                            <FooterLink to={isHomePage ? 'about' : '/'}>Investors</FooterLink>
                            <FooterLink to={isHomePage ? 'about' : '/'}>Terms of Service</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to={isHomePage ? 'hireme' : '/'}>Contact</FooterLink>
                            <FooterLink to={isHomePage ? 'hireme' : '/'}>Support</FooterLink>
                            <FooterLink to={isHomePage ? 'hireme' : '/'}>Destinations</FooterLink>
                            <FooterLink to={isHomePage ? 'hireme' : '/'}>Sponsorships</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Business</FooterLinkTitle>
                            <FooterLink to="/signin">LinkedIn</FooterLink>
                            <FooterLink to="/signin">Github</FooterLink>
                        </FooterLinkItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <SocialLogoImg src={Logo} alt='BeRich' />
                        </SocialLogo>
                        <WebsiteRights>BeRich &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
