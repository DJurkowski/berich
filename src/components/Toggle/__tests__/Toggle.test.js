import React from 'react';
import { shallow } from 'enzyme';
import Toggle from '../index';
import { ToggleContainer, ToggleInput, ToggleSlider } from '../ToggleElements';

const setUp = ( props={} ) => {
    return shallow(<Toggle {...props} />);
};

describe('Toggle component', () => {

    let component;

    beforeEach(() => {
        component = setUp();
    });

    it('shows a toggle container element', () => {
        expect(component.find(ToggleContainer).length).toEqual(1);
    });

    it('shows a toggle input element', () => {
        expect(component.find(ToggleInput).length).toEqual(1);
    });

    it('shows a toggle slider element', () => {
        expect(component.find(ToggleSlider).length).toEqual(1);
    });

});