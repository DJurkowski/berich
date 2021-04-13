import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/index';
import Stock from '../../pages/stock';
import Details from '../../pages/details';
import { Context } from '../../utils/Context/Context';
import Notfound from '../../pages/notfound';

const Routes = () => {
    const [ context, setContext ] = useState('');
    return (
        <Context.Provider value={[context, setContext]}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/stock" component={Stock} />
                <Route exact path="/stock/:id" component={Details} />
                <Route exact path="/stock/:id" component={Details} />
                <Route component={Notfound} />
            </Switch>
        </Context.Provider>
    );
};

export default Routes;
