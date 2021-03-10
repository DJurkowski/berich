import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './Table';
import { getStock } from '../../actions/stock';
import { StockContainer, StockH1 } from './StockElements';

const StockPage = ({ getStock, stock: { coins, loading }}) => {

    const [ coinsPerPage, setCoinsPerPage ] = useState(50);
    const [ pageNumber, setPageNumber ] = useState(1);
    const [ isDarkBg, setIsDarkBg ] = useState(true);

    useEffect(() => {
        getStock(coinsPerPage, pageNumber);
    }, [coinsPerPage, pageNumber])

    useEffect(() => {
        console.log("HEllo Frined");
    }, [loading]);

    return (
        <StockContainer dark={isDarkBg}>
            <StockH1>Stock</StockH1>
            {!loading && 
                <Table coins={coins} />
            }
        </StockContainer>
    );
};

StockPage.propTypes = {
    getStock: PropTypes.func.isRequired,
    stock: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    stock: state.stock
});


export default connect(mapStateToProps, { getStock })(StockPage);
