import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './Table';
import { getStock } from '../../actions/stock';
import { StockContainer, StockH1, ToggleWrappper, ToggleLabel, SelectsWrapper, SpinnerWrapper, Spinner } from './StockElements';
import Toggle from '../Toggle';
import Select from '../Select';
import Pagination from '../Pagination';
import Loading from '../../images/Spinner/spinner.gif';
import { ThemeContext } from '../../utils/Context/ThemeContext';

const StockPage = ({ getStock, stock: { coins, loading }}) => {

    const [ coinsPerPage, setCoinsPerPage ] = useState(50);
    const [ pageNumber, setPageNumber ] = useState(1);
    const [ isDarkTheme, setDarkTheme ] = useContext(ThemeContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        getStock(coinsPerPage, pageNumber);
       
    }, [coinsPerPage, pageNumber])

    useEffect(() => {
    }, [loading]);

    const handleToggle = () => {
        setDarkTheme(!isDarkTheme);
    };

    const handleCoinsPerPage = (value) => {
        setCoinsPerPage(value);
        setPageNumber(1);
    }

    return (
            <StockContainer dark={isDarkTheme}>
                <ToggleWrappper>
                    <ToggleLabel>{isDarkTheme ? 'Dark' : 'Light'} Mode</ToggleLabel>
                    <Toggle action={handleToggle} side={isDarkTheme} />
                </ToggleWrappper>
                <StockH1>Stock</StockH1>
                {loading ?
                    <SpinnerWrapper>
                       <Spinner src={Loading} alt="loading" />     
                    </SpinnerWrapper>
                :   <> 
                    <SelectsWrapper>
                    <Select selectedOption={coinsPerPage} setSelectedOption={handleCoinsPerPage} options={['10', '20', '30', '50', '100', '200']} dark={isDarkTheme} label="Coins per page:" />
                    </SelectsWrapper>
                    <Table coins={coins} isDarkBg={isDarkTheme}/>
                    <Pagination action={setPageNumber} currentPage={pageNumber} dark={isDarkTheme} />
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
