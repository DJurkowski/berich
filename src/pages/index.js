import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Navbar/Sidebar';
import HeroSection from '../components/HeroSection';

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={setIsOpen} isHomePage={true}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroSection />
        </>
    );
};

export default Home;
