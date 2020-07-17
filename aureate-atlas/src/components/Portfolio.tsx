import React from 'react';
import './stylings/Portfolio.scss';
import { connect } from 'react-redux';
import { startEditTest, startRemoveTest } from '../actions/TestActions';
import { ITestData } from 'types/stateTypes';
import { TAppState } from 'configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { TAppActions } from 'types/actionTypes';
import { bindActionCreators } from 'redux';
// import { Test } from './Test';
import ProjectList from './ProjectList';

// Interface describing local state (which can also be passed down to child components as props)
interface IPortfolioState {
    testState: string;
    fullPageBackgroundUrl: string;
}

type TProps = ILinkDispatchProps & ILinkStateProp;

class Portfolio extends React.Component<TProps, IPortfolioState> {
    constructor(props: TProps) {
        super(props);
        this.state = {
            testState: 'I AM A TEST',
            fullPageBackgroundUrl: ''
        };
    }

    render() {
        // const testProps = {
        //     testProp: this.state.testState,
        //     testArr: this.props.testArr,
        //     startEditTest: this.props.startEditTest,
        //     startRemoveTest: this.props.startRemoveTest
        // };
        return (
            <div className="Portfolio">
                <video className="Background-video" loop autoPlay>
                    <source src={process.env.PUBLIC_URL + '/videos/BlackShiftBackground.mp4'} type="video/mp4" />
                    <source src={process.env.PUBLIC_URL + '/videos/BlackShiftBackground.mp4'} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                <div className="Portfolio-header"></div>
                <div className="Portfolio-intro">
                    <img
                        className="Featured-project-img"
                        src={process.env.PUBLIC_URL + '/images/SirVeybot.jpg'}
                        alt="Something must have happened with this pic. Go fuck yourself."
                    ></img>
                </div>
                <div className="Portfolio-content">
                    <ProjectList></ProjectList>
                    {/* <Test {...testProps}></Test>
                    <div className="App">
                        <header className="App-header">
                            <img
                                src={process.env.PUBLIC_URL + '/logo.svg'}
                                className="App-logo"
                                alt="something must have happened with the logo"
                            />
                            <h1 className="App-title">Welcome to React</h1>
                            <p className="App-intro">
                                To get started, edit <code>src/App.js</code> and save to reload.
                            </p>
                        </header>
                    </div> */}
                </div>
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
