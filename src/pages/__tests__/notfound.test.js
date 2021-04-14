import React from 'react';
import { shallow } from 'enzyme';
import Notfound from '../notfound';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Navbar/Sidebar';
import NotFound from '../../components/NotFound';

const setUp = ( props={} ) => {
    return shallow(<Notfound {...props} />);
};

describe('NotFound page component', () => {

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

    it('shows a notFound component', () => {
        expect(component.find(NotFound).length).toEqual(1);
    });

});