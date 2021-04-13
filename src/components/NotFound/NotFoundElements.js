import styled from 'styled-components';
import { BiErrorCircle } from 'react-icons/bi';

export const Container = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    @media screen and (max-width: 510px) {
        flex-wrap: wrap;
    }
`;

export const ErrorIcon = styled(BiErrorCircle)`
    font-size: 40px;
`;

export const H1 = styled.h1`
    margin-left: 10px;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 510px) {
        font-size: 30px;
    }
`;
export const Paragraph = styled.div``;