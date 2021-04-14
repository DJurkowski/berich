import React from 'react';
import { shallow } from 'enzyme';
import MoreSection from '../index';
import { MoreContainer, MoreH1 } from '../MoreElements';

const setUp = ( props={} ) => {
    return shallow(<MoreSection {...props} />);
};

describe('More section component', () => {

    let component;

    beforeEach(() => {
        component = setUp();
    });

    it('shows a container element', () => {
        expect(component.find(MoreContainer).length).toEqual(1);
    });

    it('shows a h1 element', () => {
        expect(component.find(MoreH1).length).toEqual(1);
    });

});