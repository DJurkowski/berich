import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './Table';
import { getStock } from '../../actions/stock';
import { StockContainer, StockH1, ToggleWrappper, ToggleLabel, SelectsWrapper, SelectLable } from './StockElements';
import Toggle from '../Toggle';
import Select from '../Select';
import Pagination from '../Pagination';

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

    const handleCoinsPerPage = (value) => {
        setCoinsPerPage(value);
        setPageNumber(1);
    }

    return (
        <StockContainer dark={isDarkBg}>
            <ToggleWrappper>
                <ToggleLabel>{isDarkBg ? 'Dark' : 'Light'} Mode</ToggleLabel>
                <Toggle action={handleToggle} />
            </ToggleWrappper>
            <StockH1>Stock</StockH1>
            
            <SelectsWrapper>
                <Select selectedOption={coinsPerPage} setSelectedOption={handleCoinsPerPage} options={['10', '20', '30', '50', '100', '200']} dark={isDarkBg} label="Coins per page:" />
                </SelectsWrapper>
            {!loading && 
                <>
                    <Table coins={coins} isDarkBg={isDarkBg}/>
                    <Pagination action={setPageNumber} currentPage={pageNumber} dark={isDarkBg} />
                </>
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
