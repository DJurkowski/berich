import styled from 'styled-components';

export const ContactContainer = styled.div`
    height: auto;
    padding: 150px 0 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
`;

export const ContactH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 530px) {
        max-width: 300px;
        min-width: 300px;
    }

    @media screen and (max-width: 320px) {
        max-width: 200px;
        min-width: 200px;
    }
`;

export const FormItem = styled.div`
    width: 500px;
    margin-bottom: 20px;

    @media screen and (max-width: 530px) {
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 320px) {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const FormLabel = styled.label`
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 6px;
    margin-left: 7px;
    color: #2f2e41;

    @media screen and (max-width: 530px) {
        align-self: flex-start;
    }
`;

export const FormInput = styled.input`
    display: block;
    outline: none;
    border-radius: 15px;
    height: 50px;
    width: 100%;
    border: none;
    color: #fff;
    background: #010606;
    padding-left: 15px;

    &::placeholder {
        color: #898886;
        opacity: 1;
    }

    &:-ms-input-placeholder {
        color: #898886;
    }

    &::-ms-input-placeholder {
        color: #898886;
    }

    @media screen and (max-width: 530px) {
        max-width: 300px;
        min-width: 300px;
    }

    @media screen and (max-width: 320px) {
        max-width: 200px;
        min-width: 200px;
    }
`;

export const FormTextArea = styled.textarea`
    display: block;
    background: #010606;
    height: 2000px;
    min-height: 200px;
    max-height: 200px;
    width: 100%;
    max-width: 500px;
    min-width: 500px;
    border-radius: 20px;
    padding: 15px 15px;
    outline: none;
    color: #fff;

    &::placeholder {
        color: #898886;
        opacity: 1;
    }

    &:-ms-textarea-placeholder {
        color: #898886;
    }

    &::-ms-textarea-placeholder {
        color: #898886;
    }

    @media screen and (max-width: 530px) {
        max-width: 300px;
        min-width: 300px;
    }

    @media screen and (max-width: 320px) {
        max-width: 200px;
        min-width: 200px;
    }
`;

export const FormButton = styled.button`
    border-radius: 50px;
    margin-right: 7px;
    background: #010606;
    white-space: nowrap;
    padding: 12px 30px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    align-self: flex-end;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #06DE9C;
        color:  #010606;
    }

    @media screen and (max-width: 530px) {
        align-self: flex-end;
    }
`;

export const ErrorMessage = styled.p`
    color: rgba(217, 43, 43, 1);
    font-weight: bold;
    margin: 10px 0 0 7px;

`;