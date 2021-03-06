export default function validateForm(values) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errors = {};

    if(!values.username.trim()) {
        errors.username = "Name is required";
    }

    if(!values.email) {
        errors.email = "Email is required";

    } else if(!regex.test(String(values.email).toLowerCase())) {
        errors.email = "Email address is invalid";
    }

    if(!values.message.trim()) {
        errors.message = "Message is required";
    }

    return errors;
}