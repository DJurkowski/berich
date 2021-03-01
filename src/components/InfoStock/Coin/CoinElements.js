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
`;

export const CoinIcon = styled.img`
    height: 40px;
    margin-left: 20px;
`;

export const CoinName = styled.h4`
    margin-left: 30px;
`;
export const CoinShortName = styled.span`
    text-transform: uppercase;
    color: grey;
`;
export const CoinPrice = styled.h4``;

export const CoinPriceChange = styled.h4`
    margin-right: 20px;
    color: ${({price}) => (price > 0 ? 'rgba(6, 222, 156, 0.8)' : 'rgba(217, 43, 43, 1)')};
`;
