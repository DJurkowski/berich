import React from 'react';
import { useHistory } from 'react-router-dom';
import { CoinContainer, CoinImg, CoinName, CoinSymbol, CoinPrice, CoinVolume, CoinPercent, CoinMarketCap, CoinImageWrap } from './CoinElements';

const Coin = ({ id, img, name, symbol, price, volume, priceChange, marketCap, isDarkBg }) => {

    const history = useHistory();

    const handleClick = () => {

        history.push(`/stock/${id}`);
    };

    return (
        <CoinContainer isDarkBg={isDarkBg} onClick={handleClick}>
            
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
