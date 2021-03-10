import styled from 'styled-components';

export const CoinContainer = styled.tr`
    padding: 12px 0;
    height: 80px;
    margin: 0;

    &:nth-child(odd) {
        background-color: #1a1a1a;
    }

    &:hover {
        background: rgba(6, 222, 156, 0.2); 
    }
`;

export const TDElement = styled.td`
    text-align: center;

    @media screen and (max-width: 530px) {
        font-size: 14px;
    }
`;

export const CoinImageWrap = styled(TDElement)`
    width: 50px;
`;

export const CoinImg = styled.img`
    height: 40px;
    width: 40px;
    margin: 0 10px;

    @media screen and (max-width: 410px) {
        height: 28px;
        width: 28px;
    }
`;

export const CoinName = styled(TDElement)`
    width: 150px;
    font-weight: bold;
`;

export const CoinSymbol = styled(TDElement)`
    width: 50px;
    color: grey;
    font-weight: bold;
    text-transform: uppercase;

    @media screen and (max-width: 460px) {
        display: none;
    }
`;

export const CoinPrice = styled(TDElement)`
    width: 110px;
`;

export const CoinVolume = styled(TDElement)`
    width: 140px;

    @media screen and (max-width: 650px) {
        display: none;
    }
`;

export const CoinPercent = styled(TDElement)`
    width: 130px;
    font-weight: bold;
    color: ${({price}) => (price > 0 ? 'rgba(6, 222, 156, 0.8)' : 'rgba(217, 43, 43, 1)')};
`;

export const CoinMarketCap = styled(TDElement)`
    width: 160px;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;
