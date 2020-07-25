import React, { useRef, useState, MutableRefObject } from 'react';
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
import Test from './Test';
import Header from './Header';

// Libraries so you can refer to icons by name
// library.add(faCog);
// We're only adding faCoffee to the library so we can look it up.
// And we're only doing that to demonstrate how the API types might be used.
// This is not a realistic scenario. You wouldn't normally do things in such a round about way.
// It's really just to demonstrate use of the types.
// library.add(faCoffee);
// const coffeeLookup: IconLookup = { prefix: 'fas', iconName: 'coffee' };
// const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup);

type TProps = ILinkDispatchProps & ILinkStateProp;

interface IHeaderProps {
    featuredSectionRef: MutableRefObject<HTMLDivElement | null>;
    projectsSectionRef: MutableRefObject<HTMLDivElement | null>;
    bioSectionRef: MutableRefObject<HTMLDivElement | null>;
    contactSectionRef: MutableRefObject<HTMLDivElement | null>;
}

function Portfolio(props: TProps) {
    const [testState] = useState('I AM A TEST');
    const [backgroundVideoUrl] = useState('/videos/BlackShiftBackground.mp4');

    const testProps = {
        testProp: testState,
        testArr: props.testArr,
        startEditTest: props.startEditTest,
        startRemoveTest: props.startRemoveTest
    };

    const headerProps = {
        featuredSectionRef: useRef<HTMLDivElement>(null),
        projectsSectionRef: useRef<HTMLDivElement>(null),
        bioSectionRef: useRef<HTMLDivElement>(null),
        contactSectionRef: useRef<HTMLDivElement>(null)
    };

    return (
        <div className="Portfolio">
            <video className="Background-video" loop autoPlay>
                <source src={process.env.PUBLIC_URL + backgroundVideoUrl} type="video/mp4" />
                <source src={process.env.PUBLIC_URL + backgroundVideoUrl} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div className="Portfolio-header">
                <Header {...headerProps}></Header>
            </div>
            <div className="Portfolio-section-featured" ref={headerProps.featuredSectionRef}>
                <img className="Featured-project-img" src={featuredImg} alt="Error loading featured project"></img>
            </div>
            <div className="Portfolio-section-projects" ref={headerProps.projectsSectionRef}>
                <ProjectList></ProjectList>
            </div>
            <div className="Portfolio-section-bio" ref={headerProps.bioSectionRef}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="Error loading logo" />
                        <h1 className="App-title">DISCLAIMER</h1>
                        <p className="App-intro">This part of the website is under construction.</p>
                    </header>
                </div>
            </div>
            <div className="Portfolio-section-contact" ref={headerProps.contactSectionRef}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="Error loading logo" />
                        <h1 className="App-title">DISCLAIMER</h1>
                        <p className="App-intro">This part of the website is under construction.</p>
                    </header>
                </div>
                <Test {...testProps}></Test>
            </div>
        </div>
    );
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
