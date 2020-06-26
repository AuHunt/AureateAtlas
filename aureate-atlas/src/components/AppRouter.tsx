import React from 'react';
import './stylings/App.scss';
import { store } from 'configureStore';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Portfolio from './Portfolio';

export class AppRouter extends React.Component {
    history = createHistory();
    render() {
        return (
            <Provider store={store}>
                <Router history={this.history}>
                    <div>
                        <Switch>
                            <Route path="/" component={Portfolio} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <h1 className="App-title">Welcome to React</h1>
//                 </header>
//                 <p className="App-intro">
//                     To get started, edit <code>src/App.js</code> and save to
//                     reload.
//                 </p>
//                 {/* <button onClick={this.simpleAction}>Test redux action</button> */}
//             </div>
//         );
//     }
// }

export default AppRouter;
