import styled from 'styled-components';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`;

export const Button = styled.div`
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({dark}) => (dark ? '#f9f9f9' : '#010606')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    margin: 0 10px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    transition: all .2s ease-in;

    &:hover {
        transform: scale(1.1);
    }

    &[disabled] {
        pointer-events: none;
        opacity: 0.7;
    }

    @media screen and (max-width: 540px) {
        font-size: 14px;
        width: 80px;
        height: 30px;
    }
`;

export const CurrentPage = styled.div`
    width: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({dark}) => (dark ? '#f9f9f9' : '#010606')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);

    &[disabled] {
        pointer-events: none;
        opacity: 0.7;
    }

    @media screen and (max-width: 540px) {
        font-size: 14px;
        width: 40px;
        height: 30px;
    }
`;

