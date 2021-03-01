import React from 'react';
import Chart from '../Chart';
import { CoinContainer, CoinIcon, CoinName, CoinShortName, CoinPrice, CoinPriceChange, CoinChart } from './CoinElements';

const Coin = ({ coin }) => {

    return (
        <>
        <CoinContainer key={coin.id}>
            <CoinIcon src={coin.image} />
            <CoinName>{coin.name} <CoinShortName>{coin.symbol}</CoinShortName> </CoinName>
            
            <CoinPrice>${coin.current_price}</CoinPrice>
            <CoinPriceChange price={coin.price_change_percentage_24h}>{coin.price_change_percentage_24h.toFixed(2)}%</CoinPriceChange>
            <CoinChart>
                <Chart coin={coin} />
            </CoinChart>
        </CoinContainer>
        </>
    );
};

export default Coin;
