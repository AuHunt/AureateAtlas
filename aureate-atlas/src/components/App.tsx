import React, { Component } from 'react';
import './stylings/App.css';
import { store } from 'configureStore';
import { Provider } from 'react-redux';
import AppRouter from 'router';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
};

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

export default App;
