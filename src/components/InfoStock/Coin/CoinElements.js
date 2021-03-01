import styled from 'styled-components';

export const CoinContainer = styled.div`

    border-bottom: 0.5px solid rgba(120, 117, 117, 0.5);
    height: 70px;
    width: 700px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        background: rgba(6, 222, 156, 0.2);    
    }

    &:first-child {
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }

    &:last-child {
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;
        border-bottom: none;
    }

    @media screen and (max-width: 725px) {
        width: 550px;
    }

    @media screen and (max-width: 575px ) {
        width: 350px;
    }

    @media screen and (max-width: 380px) {
        width: 290px;
    }
`;

export const CoinIcon = styled.img`
    height: 40px;
    margin-left: 20px;

    @media screen and (max-width: 380px) {
        height: 30px;
        margin-left: 10px;
    }
`;

export const CoinName = styled.h4`
    margin-left: 30px;

    @media screen and (max-width: 575px) {
        margin-left: 15px;
        font-size: 14px;
    }

    @media screen and (max-width: 380px) {
        font-size: 12px;
    }
`;
export const CoinShortName = styled.span`
    text-transform: uppercase;
    color: grey;

    @media screen and (max-width: 575px) {
        font-size: 14px;
    }

    @media screen and (max-width: 380px) {
        font-size: 12px;
    }
`;
export const CoinPrice = styled.h4`
    
    @media screen and (max-width: 575px) {
        font-size: 14px;
    }

    @media screen and (max-width: 380px) {
        font-size: 12px;
    }
`;

export const CoinPriceChange = styled.h4`
    margin-right: 20px;
    color: ${({price}) => (price > 0 ? 'rgba(6, 222, 156, 0.8)' : 'rgba(217, 43, 43, 1)')};

    @media screen and (max-width: 575px) {
        margin-right: 15px;
        font-size: 14px;
    }

    @media screen and (max-width: 380px) {
        font-size: 12px;
    }
`;

export const CoinChart = styled.div`
    height: fit-content;

    @media screen and (max-width: 725px) {
        display: none;
    }
`;
