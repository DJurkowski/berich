import React from 'react';
import useForm from '../../../utils/Hooks/useForm';
import validateForm from '../../../utils/Hooks/validateForm';
import { ContactContainer, ContactH1, FormWrapper, FormItem, FormLabel, FormInput, FormTextArea, FormButton, ErrorMessage } from './ContactFormElements';


const ContactForm = ({submitForm}) => {

    const { handleChange, values, handleSubmit, errors } = useForm(validateForm, submitForm);

    return (
        <ContactContainer id="hireme">
            <ContactH1>Contact Me</ContactH1>
            <FormWrapper onSubmit={handleSubmit}>
            <FormItem>
                <FormLabel htmlFor="username">Name</FormLabel>
                    <FormInput
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        value={values.username}
                        onChange={handleChange}
                    ></FormInput>
                    {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                    ></FormInput>
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <FormTextArea
                        name="message"
                        placeholder="Tap your message..."
                        value={values.message}
                        onChange={handleChange}
                    ></FormTextArea>
                    {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                </FormItem>
                <FormButton type="submit">
                    Send
                </FormButton>
            </FormWrapper>
        </ContactContainer>
    );
};

export default ContactForm;
