import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/index';
import Stock from '../../pages/stock';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/stock" component={Stock} />
        </Switch>
    );
};

export default Routes;
