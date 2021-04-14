import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../index';
import { Container, Content, ErrorIcon, H1, Paragraph } from '../NotFoundElements';

const setUp = ( props={} ) => {
    return shallow(<NotFound {...props} />);
};

describe('NotFound component', () => {

    let component;

    beforeEach(() => {
        component = setUp();
    });

    it('shows a container element', () => {
        expect(component.find(Container).length).toEqual(1);
    });

    it('shows a content element', () => {
        expect(component.find(Content).length).toEqual(1);
    });

    it('shows a errorIcon element', () => {
        expect(component.find(ErrorIcon).length).toEqual(1);
    });

    it('shows a h1 element', () => {
        expect(component.find(H1).length).toEqual(1);
    });

    it('shows a paragraph element', () => {
        expect(component.find(Paragraph).length).toEqual(1);
    });

    it('checks if not found text exist', () => {
        expect(component.text().includes('Page Not Found')).toBe(true);
    });

    it('checks if \'sorry for issue\' text exist', () => {
        expect(component.text().includes('Sorry for the issue')).toBe(true);
    });

});