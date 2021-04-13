import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCoinMarketData, clearStateMarketData } from '../../../actions/market_data';

import ChartElement from './ChartElement';

const MarketChart = ({ getCoinMarketData, clearStateMarketData, market: {market, loading}, coin, days, dark }) => {

    useEffect(() => {
      return () => clearStateMarketData();
    },[]);


    useEffect(() => {
        getCoinMarketData(coin.id, 'usd', days);
    }, [coin.id, days]);

    
    return (
        coin.id && !loading && market &&
        <ChartElement loading={loading} market={market} dark={dark} days={days} coin={coin}/>
    );
};

MarketChart.propTypes = {
    getCoinMarketData: PropTypes.func.isRequired,
    clearStateMarketData: PropTypes.func.isRequired,
    market: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    market: state.market
});

export default  connect(mapStateToProps, { getCoinMarketData, clearStateMarketData })(MarketChart);
