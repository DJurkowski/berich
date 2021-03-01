import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoins, getCoinMarketPrices } from '../../actions/infocoins';
import { InfoStockContainer } from './InfoStockElements';
import Coin from './Coin';


const InfoStock = ({ getCoins, getCoinMarketPrices, infocoins: { coins, loading }}) => {

    useEffect(() => {
        getCoins();
    }, [getCoins]);

    useEffect(() => {
        if(!loading && coins) {
            getCoinMarketPrices(coins.map(coin => coin.id));
        }
    },[loading])

    return (
        <InfoStockContainer>
            {!loading && coins.map(coin => (
                <Coin key={coin.id} coin={coin} />
            ))}
        </InfoStockContainer>
    );
};

InfoStock.propTypes = {
    getCoins: PropTypes.func.isRequired,
    getCoinMarketPrices: PropTypes.func.isRequired,
    infocoins: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    infocoins: state.infocoins
});

export default connect(mapStateToProps, { getCoins, getCoinMarketPrices })(InfoStock);
