import React from 'react';
import { CoinContainer, CoinImg, CoinName, CoinSymbol, CoinPrice, CoinVolume, CoinPercent, CoinMarketCap, CoinImageWrap } from './CoinElements';

const Coin = ({ img, name, symbol, price, volume, priceChange, marketCap }) => {

    return (
        <CoinContainer>
            
            <CoinImageWrap>
                <CoinImg src={img} alt={name}/>
            </CoinImageWrap>
            
            <CoinName>{name}</CoinName>
        
            <CoinSymbol>{symbol}</CoinSymbol>
        
            <CoinPrice>${price}</CoinPrice>
            
            <CoinVolume>{volume.toLocaleString()}</CoinVolume>
            
            <CoinPercent price={priceChange}>{priceChange.toFixed(2)}%</CoinPercent>
            
            <CoinMarketCap>{marketCap.toLocaleString()}</CoinMarketCap>
        </CoinContainer>
                
    );
};

export default Coin;
