import React from 'react';

interface IProjectListProps {}

export class ProjectList extends React.Component<IProjectListProps, unknown> {
    loadTableElements() {
        const listContent = [
            {
                title: '3D Printed Recon Drone',
                music: [],
                assets: ['/images/SirVeybot.jpg'],
                isExpanded: false,
                desc:
                    'For one of my internships, I was tasked with building a surveillance drone that incorporated 3D printing for easier deployment. My main role was to set up the network structure, control modules, GUI, and communications for all the modules of the drone.'
            },
            {
                title: 'Online Testing System',
                music: [],
                assets: ['/images/autograderPic.jpg'],
                isExpanded: false,
                desc:
                    'I developed the front-end for an autograder system that allowed the creation of tests for an introductory python course and automatically graded it for the student. The team was split between front-end, mid-end, and back-end. Ultimately, it is a complete system equipped for students to take tests, test creation, and dynamic grading systems.'
            },
            {
                title: 'Art',
                music: [],
                assets: ['/images/fallcontrol.jpg'],
                isExpanded: false,
                desc: "Here's a cool drawing I made back when I had passions."
            },
            {
                title: '3D Printed Recon Drone',
                music: [],
                assets: ['/images/SirVeybot.jpg'],
                isExpanded: false,
                desc:
                    'For one of my internships, I was tasked with building a surveillance drone that incorporated 3D printing for easier deployment. My main role was to set up the network structure, control modules, GUI, and communications for all the modules of the drone.'
            },
            {
                title: 'Online Testing System',
                music: [],
                assets: ['/images/autograderPic.jpg'],
                isExpanded: false,
                desc:
                    'I developed the front-end for an autograder system that allowed the creation of tests for an introductory python course and automatically graded it for the student. The team was split between front-end, mid-end, and back-end. Ultimately, it is a complete system equipped for students to take tests, test creation, and dynamic grading systems.'
            },
            {
                title: 'Art',
                music: [],
                assets: ['/images/fallcontrol.jpg'],
                isExpanded: false,
                desc: "Here's a cool drawing I made back when I had passions."
            }
        ];

        let htmlItemList: any = [];
        for (let project of listContent) {
            htmlItemList.push(
                <section className="ProjectList-item">
                    <img
                        className="ProjectList-item-image"
                        src={process.env.PUBLIC_URL + project.assets[0]}
                        alt="Something must have happened with this pic. Go fuck yourself."
                    ></img>
                    <div className="ProjectList-item-content">
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                    </div>
                </section>
            );
        }

        return htmlItemList;
    }

    render() {
        return (
            <div className="ProjectList">
                <div className="ProjectList-content">{this.loadTableElements()}</div>
            </div>
        );
    }
}

export default ProjectList;
