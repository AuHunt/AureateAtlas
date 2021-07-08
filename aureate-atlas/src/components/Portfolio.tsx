import React, { useRef, useState } from 'react';
import './assets/styles/Portfolio.scss';
import Home from './Home';
import Contact from './Contact';
import Navigator from './Navigator';
import Projects from './Projects';
import backgroundVideoFallback from './assets/images/BlackPolygon.jpg';
import Skills from './Skills';
import ReactVisibilitySensor from 'react-visibility-sensor';

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
    const [visibleSection, setSection] = React.useState(0);

    // const testProps = {
    //     testProp: testState,
    //     testArr: props.testArr,
    //     startEditTest: props.startEditTest,
    //     startRemoveTest: props.startRemoveTest
    // };

    const navigatorProps = {
        homeSectionRef: useRef<HTMLDivElement>(null),
        projectsSectionRef: useRef<HTMLDivElement>(null),
        skillsSectionRef: useRef<HTMLDivElement>(null),
        contactSectionRef: useRef<HTMLDivElement>(null),
        setSection: setSection,
        visibleSection: visibleSection
    };

    function isHomeVisible(isVisible: boolean) {
        console.log(0);
        if (isVisible) {
            setSection(0);
        }
    }

    function isProjectsVisible(isVisible: boolean) {
        console.log(1);
        if (isVisible) {
            setSection(1);
        }
    }

    function isSkillsVisible(isVisible: boolean) {
        console.log(2);
        if (isVisible) {
            setSection(2);
        }
    }

    function isContactVisible(isVisible: boolean) {
        console.log(3);
        if (isVisible) {
            setSection(3);
        }
    }

    return (
        <div className="Portfolio">
            <video className="Background-video" loop autoPlay muted playsInline poster={backgroundVideoFallback}>
                <source src={process.env.PUBLIC_URL + backgroundVideoUrl} type="video/mp4" />
                <source src={process.env.PUBLIC_URL + backgroundVideoUrl} type="video/ogg" />
            </video>
            <ReactVisibilitySensor partialVisibility minTopValue={100} onChange={isHomeVisible}>
                <div className="Portfolio-section-home" ref={navigatorProps.homeSectionRef}>
                    <Home></Home>
                </div>
            </ReactVisibilitySensor>
            <ReactVisibilitySensor partialVisibility minTopValue={100} onChange={isProjectsVisible}>
                <div className="Portfolio-section-projects" ref={navigatorProps.projectsSectionRef}>
                    <Projects></Projects>
                </div>
            </ReactVisibilitySensor>
            <ReactVisibilitySensor partialVisibility minTopValue={100} onChange={isSkillsVisible}>
                <div className="Portfolio-section-skills" ref={navigatorProps.skillsSectionRef}>
                    <Skills></Skills>
                </div>
            </ReactVisibilitySensor>
            <ReactVisibilitySensor partialVisibility minTopValue={100} onChange={isContactVisible}>
                <div className="Portfolio-section-contact" ref={navigatorProps.contactSectionRef}>
                    <Contact></Contact>
                </div>
            </ReactVisibilitySensor>
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
