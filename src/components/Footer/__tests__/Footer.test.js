import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../index';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItem, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons,  SocialIconLink, SocialLogoImg } from '../FooterElements';

const setUp = ( props={} ) => {
    return shallow(<Footer {...props} />);
};

describe('Footer component', () => {

    let component;

    beforeEach(() => {
        component = setUp();
    });
    
    it('shows a container element', () => {
        expect(component.find(FooterContainer).length).toEqual(1);
    });
    
    it('shows a wrap element', () => {
        expect(component.find(FooterWrap).length).toEqual(1);
    });
    
    it('shows a links container element', () => {
        expect(component.find(FooterLinksContainer).length).toEqual(1);
    });
  
    it('shows a links wrapper element', () => {
        expect(component.find(FooterLinksWrapper).length).toEqual(1);
    });
   
    it('shows a link item elements', () => {
        expect(component.find(FooterLinkItem).length).toEqual(3);
    });

    it('shows a link title elements', () => {
        expect(component.find(FooterLinkTitle).length).toEqual(3);
    });

    it('shows a link elements', () => {
        expect(component.find(FooterLink).length).toEqual(11);
    });

    it('shows a social media wrapper element', () => {
        expect(component.find(SocialMediaWrap).length).toEqual(1);
    });

    it('shows a social media element', () => {
        expect(component.find(SocialMedia).length).toEqual(1);
    });

    it('shows a icon element', () => {
        expect(component.find(SocialLogo).length).toEqual(1);
    });

    it('shows a image element', () => {
        expect(component.find(SocialLogoImg).length).toEqual(1);
    });

    it('shows a small element', () => {
        expect(component.find(WebsiteRights).length).toEqual(1);
    });

    it('shows a icons element', () => {
        expect(component.find(SocialIcons).length).toEqual(1);
    });

    it('shows a link elements', () => {
        expect(component.find(SocialIconLink).length).toEqual(2);
    });

});