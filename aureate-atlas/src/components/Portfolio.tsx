import React, { useRef, useState } from 'react';
import './assets/styles/Portfolio.scss';
// import logo from './assets/images/logo.svg';
// import { connect } from 'react-redux';
// import { startEditTest, startRemoveTest } from '../actions/TestActions';
// import { ITestData } from 'types/stateTypes';
// import { TAppState } from 'configureStore';
// import { ThunkDispatch } from 'redux-thunk';
// import { TAppActions } from 'types/actionTypes';
// import { bindActionCreators } from 'redux';
// import Test from './Test';
import ProjectList from './ProjectList';
import Header from './Header';
import Intro from './Intro';
import Team from './Team';
import Contact from './Contact';
import { Container } from '@material-ui/core';

// type TProps = ILinkDispatchProps & ILinkStateProp;

export default function Portfolio() {
    // const [testState] = useState('I AM A TEST');
    const [backgroundVideoUrl] = useState('/videos/BlackShiftBackground.mp4');

    // const testProps = {
    //     testProp: testState,
    //     testArr: props.testArr,
    //     startEditTest: props.startEditTest,
    //     startRemoveTest: props.startRemoveTest
    // };

    const headerProps = {
        featuredSectionRef: useRef<HTMLDivElement>(null),
        projectsSectionRef: useRef<HTMLDivElement>(null),
        teamSectionRef: useRef<HTMLDivElement>(null),
        contactSectionRef: useRef<HTMLDivElement>(null)
    };

    return (
        <Container maxWidth="lg" disableGutters={true}>
            <video className="Background-video" loop autoPlay muted>
                <source src={process.env.PUBLIC_URL + backgroundVideoUrl} type="video/mp4" />
                <source src={process.env.PUBLIC_URL + backgroundVideoUrl} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div className="Portfolio-header">
                <Header {...headerProps}></Header>
            </div>
            <div className="Portfolio-section-featured" ref={headerProps.featuredSectionRef}>
                <Intro></Intro>
            </div>
            <div className="Portfolio-section-projects" ref={headerProps.projectsSectionRef}>
                <ProjectList></ProjectList>
            </div>
            <div className="Portfolio-section-team" ref={headerProps.teamSectionRef}>
                <Team></Team>
            </div>
            <div className="Portfolio-section-contact" ref={headerProps.contactSectionRef}>
                {/* <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="Error loading logo" />
                        <h1 className="App-title">DISCLAIMER</h1>
                        <p className="App-intro">This part of the website is under construction.</p>
                    </header>
                </div>
                <Test {...testProps}></Test> */}
                <Contact></Contact>
            </div>
        </Container>
    );
}

// interface ILinkStateProp {
//     testArr: ITestData[];
// }

// interface ILinkDispatchProps {
//     startEditTest: (testData: ITestData) => void;
//     startRemoveTest: (id: string) => void;
// }

// const mapStateToProps = (state: TAppState): ILinkStateProp => {
//     return {
//         testArr: state.testReducer.testArr
//     };
// };

// const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, TAppActions>): ILinkDispatchProps => ({
//     startEditTest: bindActionCreators(startEditTest, dispatch),
//     startRemoveTest: bindActionCreators(startRemoveTest, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
