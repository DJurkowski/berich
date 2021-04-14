import React from 'react';
import { shallow } from 'enzyme';
import Stock from '../stock';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Navbar/Sidebar';
import StockPage from '../../components/StockPage';

const setUp = ( props={} ) => {
    return shallow(<Stock {...props} />);
};

describe('Stock page component', () => {

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

    it('shows a stock page component', () => {
        expect(component.find(StockPage).length).toEqual(1);
    });

});