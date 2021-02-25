import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/index';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    );
};

export default Routes;