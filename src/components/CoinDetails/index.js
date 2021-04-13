import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toggle from '../Toggle';
import { getDetails } from '../../actions/details';
import { DetailsContainer, InfoBox, BoxWrapper, Img, Name, ItemContainer, ItemWrap, Rank, LinksWrapper, PriceBox, DetailsBox, ChartBox, LinkContaier, WebIcon, ClickIcon, ToggleWrappper, ToggleLabel, BoxWrapperEnd, PriceChange, PriceLabel, AnotherPriceLabel, ChangePrice, DetailsWrapper, DetailsLabel, DetailsValue, DetailsChange, InfoIcon, ProgressWrap, ProgressLabel, SelectWrap } from './CointDetailsElements';
import ProgressBar from '../ProgressBar';
import MarketChart from './MarketChart';
import Select from '../Select';

const CoinDetails = ({ getDetails, match, details: { details: coin, loading } }) => {

    const [ isDarkBg, setIsDarkBg ] = useState(false);
    const [ selectedDays, setSelectredDays ] = useState(7);

    useEffect(()=> {
        if(match.params.id) {
            getDetails(match.params.id);
        }
    },[loading]);

    const handleToggle = () => {
        setIsDarkBg(!isDarkBg);
    };

    return (
        coin &&
        <DetailsContainer dark={isDarkBg}>
            <ToggleWrappper>
                <ToggleLabel>{isDarkBg ? 'Dark' : 'Light'} Mode</ToggleLabel>
                <Toggle action={handleToggle} />
            </ToggleWrappper>
            <InfoBox>
                <BoxWrapper>
                   {coin.image && <Img src={coin.image.large}/>} 
                    <Name>{coin.name}</Name>
                    <ItemContainer dark={isDarkBg}>{coin.symbol}</ItemContainer>
                </BoxWrapper>
                <BoxWrapper>
                    <Rank dark={isDarkBg}>Rank #{coin.coingecko_rank}</Rank>
                    {coin.community_score && <ItemWrap dark={isDarkBg}>Score: {coin.community_score.toFixed(2)}</ItemWrap> }
                    {coin.hashing_algorithm && <ItemWrap dark={isDarkBg}># Algorithm: {coin.hashing_algorithm}</ItemWrap>}
                </BoxWrapper>
                <BoxWrapper>
                    {coin.genesis_date && <ItemWrap dark={isDarkBg}>Genesis: {coin.genesis_date}</ItemWrap>}
                </BoxWrapper>
                <LinksWrapper>
                    {coin.links && coin.links.homepage[0] !== "" && 
                        <LinkContaier dark={isDarkBg} href={coin.links.homepage[0]} target="_blank"><WebIcon /> {coin.links.homepage[0].slice(0, coin.links.homepage[0].length-1).replace(/^https?\:\/\/(www.)?/,'')} <ClickIcon /></LinkContaier>
                    }
                    {coin.links && coin.links.blockchain_site.length > 0 && 
                        coin.links.blockchain_site.map((site, index) => site !== "" && (
                            <LinkContaier key={index} dark={isDarkBg} href={site} target="_blank"><WebIcon /> {site.slice(0, site.length-1).replace(/^https?\:\/\/(www.)?/,'')} <ClickIcon /></LinkContaier>
                        ))
                    }
                </LinksWrapper>
            </InfoBox>
            <PriceBox>
                <PriceLabel dark={isDarkBg}>{coin.name} Price</PriceLabel>
                <BoxWrapperEnd>
                    {coin.market_data && coin.market_data.current_price.usd &&<Name>${coin.market_data.current_price.usd}</Name>}
                    {coin.market_data && coin.market_data.price_change_percentage_24h &&
                        <PriceChange price={coin.market_data.price_change_percentage_24h}>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</PriceChange>
                    }
                </BoxWrapperEnd>
                
                    {coin.id !== 'bitcoin' && coin.market_data && coin.market_data.current_price.btc && 
                    <BoxWrapperEnd>
                        <AnotherPriceLabel>{coin.market_data.current_price.btc} BTC</AnotherPriceLabel>
                        {coin.market_data.market_cap_change_percentage_24h_in_currency.eth && 
                        <ChangePrice price={coin.market_data.market_cap_change_percentage_24h_in_currency.btc}>{coin.market_data.market_cap_change_percentage_24h_in_currency.btc.toFixed(2)}%</ChangePrice>
                        }
                    </BoxWrapperEnd>
                    }
                    {coin.id !== 'ethereum' && coin.market_data && coin.market_data.current_price.btc && 
                    <BoxWrapperEnd>
                        <AnotherPriceLabel>{coin.market_data.current_price.eth} ETH</AnotherPriceLabel>
                        {coin.market_data.market_cap_change_percentage_24h_in_currency.eth && 
                        <ChangePrice price={coin.market_data.market_cap_change_percentage_24h_in_currency.eth}>{coin.market_data.market_cap_change_percentage_24h_in_currency.eth.toFixed(2)}%</ChangePrice>
                        }
                    </BoxWrapperEnd>
                    }
                    {coin.market_data && coin.market_data.high_24h.usd && coin.market_data.low_24h.usd &&
                        <ProgressWrap>
                            <ProgressLabel dark={isDarkBg}>Low: ${coin.market_data.low_24h.usd}</ProgressLabel>
                            <ProgressBar low={coin.market_data.low_24h.usd} high={coin.market_data.high_24h.usd}/>
                            <ProgressLabel dark={isDarkBg}>High: ${coin.market_data.high_24h.usd}</ProgressLabel>
                        </ProgressWrap>
                    }
            </PriceBox>
            <DetailsWrapper>
                {coin.market_data && 
                <DetailsBox dark={isDarkBg}>
                    <DetailsLabel dark={isDarkBg}>Market Cap <InfoIcon/> </DetailsLabel>
                        <DetailsValue>${coin.market_data.market_cap.usd}</DetailsValue>
                        <DetailsChange price={coin.market_data.market_cap_change_percentage_24h}>{coin.market_data.market_cap_change_percentage_24h.toFixed(2)}%</DetailsChange>
                </DetailsBox>
                }
                {coin.market_data && coin.market_data.total_volume.usd && 
                <DetailsBox dark={isDarkBg}>
                    <DetailsLabel dark={isDarkBg}>Total Volume <InfoIcon/></DetailsLabel>
                    <DetailsValue>${coin.market_data.total_volume.usd}</DetailsValue>
                </DetailsBox>
                }
            </DetailsWrapper>
            {coin.market_data && 
            <>
                <SelectWrap>
                    <Select selectedOption={selectedDays} setSelectedOption={setSelectredDays} options={['7', '14', '30', '60', '120', 'max']} dark={isDarkBg} label="Price from last days:" smallSize={true} leftSide={true} />
                </SelectWrap>
                <ChartBox>
                    <MarketChart loading={loading} coin={coin} days={selectedDays} currency='usd' dark={isDarkBg}/>
                </ChartBox>
            </>
            }
        </DetailsContainer>
    );
};

CoinDetails.propTypes = {
    getDetails: PropTypes.func.isRequired,
    details: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    details: state.details
});

export default connect(mapStateToProps, { getDetails })(CoinDetails);
