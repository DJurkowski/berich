import React from 'react';
import Coin from '../Coin';
import { TableCointainer, TableHeader, TableTHContainer, TableBody, TableTH, THMartketCap, THVolume, THSymbol } from './TableElements';

const Table = ({ coins, isDarkBg }) => {
    return (
        <TableCointainer cellspacing="0" cellpadding="0">
            <TableHeader isDarkBg={isDarkBg}>
                <TableTHContainer>
                    <TableTH></TableTH>
                    <TableTH>Name</TableTH>
                    <THSymbol>Symbol</THSymbol>
                    <TableTH>Price</TableTH>
                    <THVolume>Volume</THVolume>
                    <TableTH>Percent Change</TableTH>
                    <THMartketCap>Market Cap</THMartketCap>
                </TableTHContainer>
            </TableHeader>
            <TableBody cellspacing="0" cellpadding="0">
                {coins.map( coin => 
                    <Coin
                        key={coin.id}
                        id={coin.id}
                        img={coin.image}
                        name={coin.name}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        marketCap={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h}
                        volume={coin.total_volume}
                        isDarkBg={isDarkBg}
                    />    
                )}
            </TableBody>
        </TableCointainer>
    );
};

export default Table;
