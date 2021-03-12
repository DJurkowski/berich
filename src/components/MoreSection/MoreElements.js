import styled from 'styled-components';

export const MoreContainer = styled.div`
    height: auto;
    padding: 150px 0 120px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
`;

export const MoreH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;