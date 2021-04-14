import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItem, FooterLinkOut, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons,  SocialIconLink, SocialLogoImg } from './FooterElements';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from '../../images/Logo/Logo.png';

const Footer = () => {

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
                            <FooterLink to='knowhow' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Know How</FooterLink>
                            <FooterLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</FooterLink>
                            <FooterLink to='crypto' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Crypto</FooterLink>
                            <FooterLink to='more' smooth={true} duration={500} spy={true} exact='true' offset={-80}>More</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='hireme' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</FooterLink>
                            <FooterLink to='hireme' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Support</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>Business</FooterLinkTitle>
                            <FooterLinkOut href="https://www.linkedin.com/in/dominik-jurkowski-aa33451a8/" target="_blank" >LinkedIn</FooterLinkOut>
                            <FooterLinkOut href="https://github.com/DJurkowski" target="_blank" >Github</FooterLinkOut>
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
                            <SocialIconLink href="https://www.linkedin.com/in/dominik-jurkowski-aa33451a8/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/DJurkowski" target="_blank" aria-label="Github">
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
