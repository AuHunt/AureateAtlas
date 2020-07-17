import React from 'react';
import { store } from 'configureStore';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Portfolio from './Portfolio';

export class AppRouter extends React.Component {
    history = createBrowserHistory();
    render() {
        return (
            <Provider store={store}>
                <Router history={this.history}>
                    <Switch>
                        <Route path="/portfolio" component={Portfolio} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default AppRouter;
