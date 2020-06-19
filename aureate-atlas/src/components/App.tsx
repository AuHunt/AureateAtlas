import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './stylings/App.css';
import { connect, useSelector } from 'react-redux';
import { modTest } from 'actions/homepageActions';
import { RootState } from 'store/configureStore';

class App extends Component {
  constructor(props: any) {
    super(props);
  };

  readonly testText = useSelector((state: RootState) => state.homepageReducer.test);
   
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{this.testText}</h1>
        {/* <button onClick={this.simpleAction}>Test redux action</button> */}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  ...state
});

const mapDispatchToProps = (dispatch: any) => ({
  simpleAction: () => dispatch(modTest("POOTIS"))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
