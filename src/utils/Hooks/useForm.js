import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const useForm = (validateForm, submitForm) => {
    const [ values, setValues ] = useState({
        username: '',
        email: '',
        message: ''
    });

    const [ errors, setErrors ] = useState({});
    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateForm(values));
        setIsSubmitting(true);
    }

    useEffect(() => {

        if(Object.keys(errors).length === 0 && isSubmitting) {
            submitForm();
           
            emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID , values, process.env.REACT_APP_EMAIL_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
    }, [errors]);

    return { handleChange, values, handleSubmit, errors };
};

export default useForm;