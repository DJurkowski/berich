import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Navbar/Sidebar';
import HeroSection from '../components/HeroSection';
import UniversalSection from '../components/UniversalSection';
import { aboutSection, cryptoSection } from '../utils/Data/Data';

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
            <UniversalSection {...aboutSection} />
            <UniversalSection {...cryptoSection} />
        </>
    );
};

export default Home;
