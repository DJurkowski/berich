import React from 'react';
import { shallow } from 'enzyme';
import Details from '../details';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Navbar/Sidebar';
import CoinDetails from '../../components/CoinDetails';

const setUp = ( props={} ) => {
    return shallow(<Details {...props} />);
};

describe('Details page component', () => {

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

    it('shows a coinDetails component', () => {
        expect(component.find(CoinDetails).length).toEqual(1);
    });

});