import React, { useState } from 'react';
import './assets/styles/ProjectList.scss';
import SirVeyBot from './assets/images/SirVeybot.jpg';
import Autograder from './assets/images/autograderPic.jpg';
import fallControl from './assets/images/fallcontrol.jpg';

interface IListProject {
    title: string;
    music: string[];
    assets: any;
    isExpanded: false;
    desc: string;
}

export default function ProjectList() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedAssets, setSelectedAssets] = useState([SirVeyBot]);
    const [selectedTitle, setSelectedTitle] = useState('Sample Title');
    const [selectedDesc, setSelectedDesc] = useState('Sample Desc');

    const listContent: IListProject[] = [
        {
            title: '3D Printed Recon Drone',
            music: [],
            assets: [SirVeyBot],
            isExpanded: false,
            desc:
                'For one of my internships, I was tasked with building a surveillance drone that incorporated 3D printing for easier deployment. My main role was to set up the network structure, control modules, GUI, and communications for all the modules of the drone.'
        },
        {
            title: 'Online Testing System',
            music: [],
            assets: [Autograder],
            isExpanded: false,
            desc:
                'I developed the front-end for an autograder system that allowed the creation of tests for an homeductory python course and automatically graded it for the student. The team was split between front-end, mid-end, and back-end. Ultimately, it is a complete system equipped for students to take tests, test creation, and dynamic grading systems.'
        },
        {
            title: 'Art',
            music: [],
            assets: [fallControl],
            isExpanded: false,
            desc: "Here's a cool drawing I made back when I had passions."
        },
        {
            title: '3D Printed Recon Drone',
            music: [],
            assets: [SirVeyBot],
            isExpanded: false,
            desc:
                'For one of my internships, I was tasked with building a surveillance drone that incorporated 3D printing for easier deployment. My main role was to set up the network structure, control modules, GUI, and communications for all the modules of the drone.'
        },
        {
            title: 'Online Testing System',
            music: [],
            assets: [Autograder],
            isExpanded: false,
            desc:
                'I developed the front-end for an autograder system that allowed the creation of tests for an homeductory python course and automatically graded it for the student. The team was split between front-end, mid-end, and back-end. Ultimately, it is a complete system equipped for students to take tests, test creation, and dynamic grading systems.'
        },
        {
            title: 'Art',
            music: [],
            assets: [fallControl],
            isExpanded: false,
            desc: "Here's a cool drawing I made back when I had passions."
        }
    ];

    function onProjectClick(assets: any[], title: string, desc: string) {
        setShowOverlay(true);
        setSelectedAssets(assets);
        setSelectedTitle(title);
        setSelectedDesc(desc);
    }

    function loadOverlay(showOverlay: boolean) {
        if (showOverlay) {
            return (
                <div className="Portfolio-overlay" onClick={() => setShowOverlay(false)}>
                    <div className="Selected-project-modal">
                        <div className="Selected-project-content-wrapper" onClick={(e) => e.stopPropagation()}>
                            <a href={selectedAssets[0]}>
                                <img
                                    className="Selected-project-img"
                                    src={selectedAssets[0]}
                                    alt="Error loading home project"
                                ></img>
                            </a>
                        </div>
                        <div className="Selected-project-info" onClick={(e) => e.stopPropagation()}>
                            <h2>{selectedTitle}</h2>
                            <p>{selectedDesc}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return;
        }
    }

    function loadProjectList() {
        const projectList: any = [];
        for (let index = 0; index < listContent.length; index++) {
            const project = listContent[index];

            const projectItem = (
                <div key={'project-item-' + index} className="Project-list-item-wrapper">
                    <button
                        className={'Project-list-item-button '}
                        onClick={() => onProjectClick(project.assets, project.title, project.desc)}
                    >
                        <img
                            className={'Project-list-item-image'}
                            src={project.assets[0]}
                            alt="Error loading home project"
                        ></img>
                    </button>
                    <div className="Project-list-item-info">
                        <h1 className="Project-title">{project.title}</h1>
                    </div>
                </div>
            );

            projectList.push(projectItem);
        }
        return projectList;
    }

    return (
        <div className="Project-list-container">
            <div className="container-header">
                <div className="container-header-content">
                    <div className="container-header-title">Projects</div>
                </div>
            </div>
            {loadProjectList()}
            {loadOverlay(showOverlay)}
        </div>
    );
}
