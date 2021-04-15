import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../index';
import { PaginationContainer, CurrentPage, Button } from '../PaginationElements';

const setUp = ( props={} ) => {
    return shallow(<Pagination {...props} />);
};

describe('Pagination component', () => {

    let component;

    beforeEach(() => {
        component = setUp();
    });

    it('has a container element', () => {
        expect(component.find(PaginationContainer).length).toEqual(1);
    });

    it('has a button elements', () => {
        expect(component.find(Button).length).toEqual(2);
    });

    it('has a text container element', () => {
        expect(component.find(CurrentPage).length).toEqual(1);
    });
});