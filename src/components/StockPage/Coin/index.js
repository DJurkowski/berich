import React from 'react';
import { CoinContainer, CoinImg, CoinName, CoinSymbol, CoinPrice, CoinVolume, CoinPercent, CoinMarketCap, CoinImageWrap } from './CoinElements';

const Coin = ({ img, name, symbol, price, volume, priceChange, marketCap, isDarkBg }) => {

    return (
        <CoinContainer isDarkBg={isDarkBg}>
            
            <CoinImageWrap>
                <CoinImg src={img} alt={name}/>
            </CoinImageWrap>
            
            <CoinName>{name}</CoinName>
        
            <CoinSymbol>{symbol}</CoinSymbol>
        
            <CoinPrice>${price}</CoinPrice>
            
            <CoinVolume>{volume.toLocaleString()}</CoinVolume>
            
            <CoinPercent price={priceChange}>{priceChange ? `${priceChange.toFixed(2)}%` : 'no data'}</CoinPercent>
            
            <CoinMarketCap>{marketCap.toLocaleString()}</CoinMarketCap>
        </CoinContainer>
                
    );
};

export default Coin;
