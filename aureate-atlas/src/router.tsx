import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Test from './components/Test';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={Test} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
