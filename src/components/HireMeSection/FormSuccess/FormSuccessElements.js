import styled from 'styled-components';

export const FormSuccessContainer = styled.div`
    height: auto;
    padding: 150px 0 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
`;

export const SuccessH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 64px;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const SuccessImageWrapper = styled.div`
    max-width: 555px;
    height: 100%;
    margin: 0 20px;
`;

export const SuccessImg = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;