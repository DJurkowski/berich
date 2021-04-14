import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from '../index';
import { ContactContainer, ContactH1, FormWrapper, FormItem, FormLabel, FormInput, FormTextArea, FormButton, ErrorMessage } from '../ContactFormElements';

const setUp = ( props={} ) => {
    return shallow(<ContactForm {...props} />);
};

describe('Contact form component', () => {

    let component;

    describe('check elements appearance', () => {
        
        beforeEach(() => {
            component = setUp();
        });

        it('shows a container element', () => {
            expect(component.find(ContactContainer).length).toEqual(1);
        });

        it('shows a h1 element', () => {
            expect(component.find(ContactH1).length).toEqual(1);
        });

        it('shows a form wrapper element', () => {
            expect(component.find(FormWrapper).length).toEqual(1);
        });
        
        it('shows a form item elements', () => {
            expect(component.find(FormItem).length).toEqual(3);
        });

        it('shows a form label elements', () => {
            expect(component.find(FormLabel).length).toEqual(3);
        });
        
        it('shows a form input elements', () => {
            expect(component.find(FormInput).length).toEqual(2);
        });

        it('shows a form text area element', () => {
            expect(component.find(FormTextArea).length).toEqual(1);
        });

        it('shows a form button element', () => {
            expect(component.find(FormButton).length).toEqual(1);
        });

        it('shows a error message element', () => {
            expect(component.find(ErrorMessage).length).toEqual(0);
        });
    });
});