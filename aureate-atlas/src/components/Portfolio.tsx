import React from 'react';
import './assets/styles/Portfolio.scss';
import logo from './assets/images/logo.svg';
import featuredImg from './assets/images/SirVeybot.jpg';
import { connect } from 'react-redux';
import { startEditTest, startRemoveTest } from '../actions/TestActions';
import { ITestData } from 'types/stateTypes';
import { TAppState } from 'configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { TAppActions } from 'types/actionTypes';
import { bindActionCreators } from 'redux';
import ProjectList from './ProjectList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Test from './Test';

// Libraries so you can refer to icons by name
// library.add(faCog);
// We're only adding faCoffee to the library so we can look it up.
// And we're only doing that to demonstrate how the API types might be used.
// This is not a realistic scenario. You wouldn't normally do things in such a round about way.
// It's really just to demonstrate use of the types.
// library.add(faCoffee);
// const coffeeLookup: IconLookup = { prefix: 'fas', iconName: 'coffee' };
// const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup);

// Interface describing local state (which can also be passed down to child components as props)
interface IPortfolioState {
    testState: string;
    backgroundVideoUrl: string;
}

type TProps = ILinkDispatchProps & ILinkStateProp;

class Portfolio extends React.Component<TProps, IPortfolioState> {
    constructor(props: TProps) {
        super(props);
        this.state = {
            testState: 'I AM A TEST',
            backgroundVideoUrl: '/videos/BlackShiftBackground.mp4'
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
            <div className="Portfolio">
                <video className="Background-video" loop autoPlay>
                    <source src={process.env.PUBLIC_URL + this.state.backgroundVideoUrl} type="video/mp4" />
                    <source src={process.env.PUBLIC_URL + this.state.backgroundVideoUrl} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                <div className="Portfolio-header">
                    <button className="Section-button Accordion-trigger">
                        <FontAwesomeIcon icon={faBars} fixedWidth={false} size="2x" />
                    </button>
                    <button className="Section-button Accordion-featured">POOTIS</button>
                    <button className="Section-button Accordion-projects">PENCER</button>
                    <button className="Section-button Accordion-about">HERE</button>
                </div>
                <div className="Portfolio-intro">
                    <img
                        className="Featured-project-img"
                        src={featuredImg}
                        alt="Something must have happened with this pic. Go fuck yourself."
                    ></img>
                </div>
                <div className="Portfolio-content">
                    <ProjectList></ProjectList>
                </div>
                <div className="Portfolio-outro">
                    <Test {...testProps}></Test>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="something must have happened with the logo" />
                            <h1 className="App-title">Welcome to React</h1>
                            <p className="App-intro">
                                To get started, edit <code>src/App.js</code> and save to reload.
                            </p>
                        </header>
                    </div>
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
