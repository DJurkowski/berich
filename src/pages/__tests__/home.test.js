import React from 'react';
import { shallow } from 'enzyme';
import Home from '../index';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Navbar/Sidebar';
import HeroSection from '../../components/HeroSection';
import UniversalSection from '../../components/UniversalSection';
import Services from '../../components/Services';
import HireMeSection from '../../components/HireMeSection';
import Footer from '../../components/Footer';
import MoreSection from '../../components/MoreSection';

const setUp = ( props={} ) => {
    return shallow(<Home {...props} />);
};

describe('Home page component', () => {

    let component;

    beforeEach(() => {
        component = setUp();
    });

    it('shows a navbar component', () => {
        expect(component.find(Navbar).length).toEqual(1);
    });

    it('shows a sidebar component', () => {
        expect(component.find(Sidebar).length).toEqual(1);
    });

    it('shows a heroSection component', () => {
        expect(component.find(HeroSection).length).toEqual(1);
    });
    
    it('shows a universalSection component', () => {
        expect(component.find(UniversalSection).length).toEqual(2);
    });

    it('shows a services component', () => {
        expect(component.find(Services).length).toEqual(1);
    });

    it('shows a hireMeSection component', () => {
        expect(component.find(HireMeSection).length).toEqual(1);
    });

    it('shows a footer component', () => {
        expect(component.find(Footer).length).toEqual(1);
    });

    it('shows a moreSection component', () => {
        expect(component.find(MoreSection).length).toEqual(1);
    });

});