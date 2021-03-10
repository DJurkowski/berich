import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './Table';
import { getStock } from '../../actions/stock';
import { StockContainer, StockH1, ToggleWrappper, ToggleLabel } from './StockElements';
import Toggle from '../Toggle';

const StockPage = ({ getStock, stock: { coins, loading }}) => {

    const [ coinsPerPage, setCoinsPerPage ] = useState(50);
    const [ pageNumber, setPageNumber ] = useState(1);
    const [ isDarkBg, setIsDarkBg ] = useState(false);

    useEffect(() => {
        getStock(coinsPerPage, pageNumber);
    }, [coinsPerPage, pageNumber])

    useEffect(() => {
    }, [loading]);

    const handleToggle = () => {
        setIsDarkBg(!isDarkBg);
    };

    return (
        <StockContainer dark={isDarkBg}>
            <ToggleWrappper>
                <ToggleLabel>{isDarkBg ? 'Dark' : 'Light'} Mode</ToggleLabel>
                <Toggle action={handleToggle} />
            </ToggleWrappper>
            <StockH1>Stock</StockH1>
            {!loading && 
                <Table coins={coins} isDarkBg={isDarkBg}/>
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
