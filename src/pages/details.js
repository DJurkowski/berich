import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Navbar/Sidebar';
import CoinDetails from '../components/CoinDetails';

const Details = (props) => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={toggle} isstockpage="true"/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <CoinDetails {...props} />
        </>
    );
};

export default Details;
