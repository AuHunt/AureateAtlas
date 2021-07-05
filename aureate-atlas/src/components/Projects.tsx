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
                'For my junior internship, I worked in a multi-disciplinary team to develop a proof-of-concept drone capable of finding people in disaster zones. The aim was to make it cheap to produce and fast to deploy. I was in charge of developing the control modules, sensor systems, and wireless communication system for the drone and its array of tools.'
        },
        {
            title: 'Online Testing System',
            music: [],
            assets: [Autograder],
            isExpanded: false,
            description:
                'Automatic grading system that provides students with grading, testing, and dynamic correction systems. More specifically, this targeted students taking introductory Python courses.'
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
