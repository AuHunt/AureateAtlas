import React from 'react';
import './assets/styles/Projects.scss';
import SirVeyBot from './assets/images/SirVeybot.jpg';
import Autograder from './assets/images/autograderPic.jpg';
import FallControl from './assets/images/FallControl.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActions, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

interface IListProject {
    title: string;
    music: string[];
    assets: any;
    isExpanded: false;
    description: string;
}

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 300
    }
});

export default function ProjectList() {
    const classes = useStyles();

    const listContent: IListProject[] = [
        {
            title: '3D Printed Recon Drone',
            music: [],
            assets: [SirVeyBot],
            isExpanded: false,
            description:
                'For one of my internships, I was tasked with building a surveillance drone that incorporated 3D printing for easier deployment. My main role was to set up the network structure, control modules, GUI, and communications for all the modules of the drone.'
        },
        {
            title: 'Online Testing System',
            music: [],
            assets: [Autograder],
            isExpanded: false,
            description:
                'I developed the front-end for an autograder system that allowed the creation of tests for an homeductory python course and automatically graded it for the student. The team was split between front-end, mid-end, and back-end. Ultimately, it is a complete system equipped for students to take tests, test creation, and dynamic grading systems.'
        },
        {
            title: 'Art',
            music: [],
            assets: [FallControl],
            isExpanded: false,
            description: "Here's a cool drawing I made back when I had passions."
        },
        {
            title: '3D Printed Recon Drone',
            music: [],
            assets: [SirVeyBot],
            isExpanded: false,
            description:
                'For one of my internships, I was tasked with building a surveillance drone that incorporated 3D printing for easier deployment. My main role was to set up the network structure, control modules, GUI, and communications for all the modules of the drone.'
        },
        {
            title: 'Online Testing System',
            music: [],
            assets: [Autograder],
            isExpanded: false,
            description:
                'I developed the front-end for an autograder system that allowed the creation of tests for an homeductory python course and automatically graded it for the student. The team was split between front-end, mid-end, and back-end. Ultimately, it is a complete system equipped for students to take tests, test creation, and dynamic grading systems.'
        },
        {
            title: 'Art',
            music: [],
            assets: [FallControl],
            isExpanded: false,
            description: "Here's a cool drawing I made back when I had passions."
        }
    ];

    function loadProjects() {
        const projectList: any = [];
        for (let index = 0; index < listContent.length; index++) {
            const project = listContent[index];

            const projectItem = (
                <div className="Project-list-item-container">
                    <Card key={`project-item-${index}`} className={`${classes.root} Project-list-item`}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={project.assets[0]}
                                title="Contemplative Reptile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {project.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {project.description}
                            </Typography>
                        </CardContent>
                    </Card>
                    <CardActions className="Project-list-item-actions">
                        <IconButton aria-label="Github">
                            <GitHubIcon />
                        </IconButton>
                    </CardActions>
                </div>
            );

            projectList.push(projectItem);
        }
        return projectList;
    }

    return (
        <div className="Projects-container">
            <div className="Container-header">projects</div>
            {loadProjects()}
        </div>
    );
}
