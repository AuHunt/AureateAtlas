import React, { useRef, useState } from 'react';
import './assets/styles/Portfolio.scss';
import Home from './Home';
import Contact from './Contact';
import Navigator from './Navigator';
import Projects from './Projects';

// *** REACT-REDUX STUFF ***
// import logo from './assets/images/logo.svg';
// import { connect } from 'react-redux';
// import { startEditTest, startRemoveTest } from '../actions/TestActions';
// import { ITestData } from 'types/stateTypes';
// import { TAppState } from 'configureStore';
// import { ThunkDispatch } from 'redux-thunk';
// import { TAppActions } from 'types/actionTypes';
// import { bindActionCreators } from 'redux';
// import Test from './Test';
// type TProps = ILinkDispatchProps & ILinkStateProp;

export default function Portfolio() {
    const [backgroundVideoUrl] = useState('/videos/BlackConstellation.mp4');

    // const testProps = {
    //     testProp: testState,
    //     testArr: props.testArr,
    //     startEditTest: props.startEditTest,
    //     startRemoveTest: props.startRemoveTest
    // };

    const navigatorProps = {
        homeSectionRef: useRef<HTMLDivElement>(null),
        projectsSectionRef: useRef<HTMLDivElement>(null),
        teamSectionRef: useRef<HTMLDivElement>(null),
        contactSectionRef: useRef<HTMLDivElement>(null)
    };

    return (
        <div className="Portfolio">
            <video
                className="Background-video"
                loop
                autoPlay
                muted
                playsInline
                poster="/images/BlackConstellationFallBack.png"
            >
                <source src={process.env.PUBLIC_URL + backgroundVideoUrl} type="video/mp4" />
                <source src={process.env.PUBLIC_URL + backgroundVideoUrl} type="video/ogg" />
            </video>
            <div className="Portfolio-section-home" ref={navigatorProps.homeSectionRef}>
                <Home></Home>
            </div>
            <div className="Portfolio-section-projects" ref={navigatorProps.projectsSectionRef}>
                <Projects></Projects>
            </div>
            {/* <div className="Portfolio-section-team" ref={navigatorProps.teamSectionRef}>
                <Team></Team>
            </div> */}
            <div className="Portfolio-section-contact" ref={navigatorProps.contactSectionRef}>
                <Contact></Contact>
            </div>
            <div className="Portfolio-navigator">
                <Navigator {...navigatorProps}></Navigator>
            </div>
        </div>
    );
}

// *** REACT-REDUX STUFF ***
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
