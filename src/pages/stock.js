import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Navbar/Sidebar';
import StockPage from '../components/StockPage';

const Stock = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={toggle} isstockpage={true}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <StockPage />
        </>
    );
};

export default Stock;
