import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './components/Routing';

const App = () => {
    return (
        <Router>
            <Routes />
        </Router>
    );
};

export default App;
