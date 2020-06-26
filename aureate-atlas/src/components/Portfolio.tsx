import React from 'react';
import './stylings/App.scss';
import logo from '../assets/logo.svg';
import { connect } from 'react-redux';
import { startEditTest, startRemoveTest } from '../actions/TestActions';
import { ITestData } from 'types/stateTypes';
import { TAppState } from 'configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { TAppActions } from 'types/actionTypes';
import { bindActionCreators } from 'redux';
import { Test } from './Test';

// Interface describing local state (which can also be passed down to child components as props)
interface IPortfolioState {
    testState: string;
}

type TProps = ILinkDispatchProps & ILinkStateProp;

class Portfolio extends React.Component<TProps, IPortfolioState> {
    constructor(props: TProps) {
        super(props);
        this.state = {
            testState: 'I AM A TEST'
        };
    }

    render() {
        const testProps = {
            testProp: this.state.testState,
            testArr: this.props.testArr,
            startEditTest: this.props.startEditTest,
            startRemoveTest: this.props.startRemoveTest
        };
        return (
            <div className="portfolio-root">
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
                <Test {...testProps}></Test>
            </div>
        );
    }
}

interface ILinkStateProp {
    testArr: ITestData[];
}

interface ILinkDispatchProps {
    startEditTest: (testData: ITestData) => void;
    startRemoveTest: (id: string) => void;
}

// ownProps refers to the props that were passed down from parent component. In this case, the props from App.tsx
const mapStateToProps = (state: TAppState): ILinkStateProp => {
    return {
        testArr: state.testReducer.testArr
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, TAppActions>): ILinkDispatchProps => ({
    startEditTest: bindActionCreators(startEditTest, dispatch),
    startRemoveTest: bindActionCreators(startRemoveTest, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
