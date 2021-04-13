import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/index';
import Stock from '../../pages/stock';
import Details from '../../pages/details';
import { Context } from '../../utils/Context/Context';

const Routes = () => {
    const [ context, setContext ] = useState('');
    return (
        <Context.Provider value={[context, setContext]}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/stock" component={Stock} />
                <Route exact path="/stock/:id" component={Details} />
            </Switch>
        </Context.Provider>
    );
};

export default Routes;
