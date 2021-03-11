import styled from 'styled-components';

export const StockContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
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

export const ToggleWrappper = styled.div`
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

export const ToggleLabel = styled.div`
    display: inline-block;
    margin-right: 10px;
`;

export const SelectsWrapper = styled.div`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 40px 0 0;
    position: relative;
`;