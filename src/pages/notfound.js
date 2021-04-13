import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Navbar/Sidebar';
import NotFound from '../components/NotFound';

const Notfound = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={toggle} isStockPage={true}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NotFound />
        </>
    );
}

export default Notfound;
