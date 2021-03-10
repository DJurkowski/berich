import styled from 'styled-components';

export const StockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    background-color: ${({dark}) => (dark ? '#010606' : '#f9f9f9')};
    color: ${({dark}) => (dark ? '#fff' : '#010606')};
    min-height: 100vh;
`;

export const StockH1 = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;