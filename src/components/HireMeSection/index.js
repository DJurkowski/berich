import React, { useState } from 'react';
import ContactForm from './ContactForm';
import FormSuccess from './FormSuccess';

const HireMeSection = () => {
    const [ isSummited, setIsSubmitted ] = useState(false);

    const submitForm = () => {
        setIsSubmitted(true);
    };

    return (
        !isSummited ? <ContactForm submitForm={submitForm}/> : <FormSuccess />
    );
};

export default HireMeSection;
