import React from 'react';
import './assets/styles/Projects.scss';
import SirVeyBot from './assets/images/SirVeybot.jpg';
import Autograder from './assets/images/autograderPic.jpg';
import CharlesDiscordBot from './assets/images/CharlesDiscordBot.png';
import ZephyrPrototype from './assets/images/ZephyrPrototype1.png';
import AsteroidsAngerCube from './assets/images/AsteroidsAngerCube.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActions, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

interface IProjectActions {
    name: string;
    link: string;
}

interface IListProject {
    title: string;
    assets: any;
    description: string;
    actions: IProjectActions[];
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
            title: 'Zephyr (Prototype)',
            assets: [ZephyrPrototype],
            description:
                "Developing a multiplayer parkour game inspired by Mirror's Edge and a Team Fortress 2 parkour mod that allowed multiplayer connectivity. For this prototype, the scope is to integrate both of these aspects into one standalone game. However as I expand the scope of this project, I hope to shift the playstyle, music, and art style into something more unique to me. Progress updates coming to my instagram or twitter in the near future.",
            actions: [
                { name: 'instagram', link: 'https://www.instagram.com/auhunter_/' },
                { name: 'twitter', link: 'https://twitter.com/AuHunter_' }
            ]
        },
        {
            title: '3D Printed Recon Drone',
            assets: [SirVeyBot],
            description:
                'For my junior internship, I worked in a multi-disciplinary team to develop a proof-of-concept drone capable of finding people in disaster zones. The aim was to make it cheap to produce and fast to deploy. I was in charge of developing the control modules, sensor systems, and wireless communication system for the drone and its array of tools.',
            actions: []
        },
        {
            title: 'Online Testing System',
            assets: [Autograder],
            description:
                'Automatic grading system that provides students with grading, testing, and dynamic correction systems. More specifically, this targeted students taking introductory Python courses.',
            actions: [{ name: 'github', link: 'https://github.com/AuHunt/OnlineTestingSystem' }]
        },
        {
            title: 'Discord Web Scraper Bot',
            assets: [CharlesDiscordBot],
            description:
                'Lightweight discord bot designed to web scrape sites like Youtube and Reddit quickly. In addition to its intended purpose, some other functionality was added to facilitate server moderation including chat cleanup, role modifiers, and several other tools.',
            actions: []
        },
        {
            title: 'Old Game Recreations',
            assets: [AsteroidsAngerCube],
            description:
                'Most of my earlier programming projects were to build an understanding of how to make games. Most of them were recreations of classics like Pong, Asteroids, or simple 2D side scrollers. Others were proof of concept for how to make multiplayer games. All these projects not only introduced me into programming but also helped me build knowledge I still use today.',
            actions: [{ name: 'github', link: 'https://github.com/AuHunt?tab=repositories' }]
        }
    ];

    function loadProjects() {
        const projectList: any = [];
        for (let index = 0; index < listContent.length; index++) {
            const project = listContent[index];

            const projectItem = (
                <div key={`project-item-${index}`} className="Project-list-item-container">
                    <Card className={`${classes.root} Project-list-item`}>
                        <CardActionArea href={project.assets[0]} target="_blank">
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
                        {project.actions.map((action, index) => {
                            if (action.name === 'github') {
                                return (
                                    <IconButton key={index} aria-label="Github" href={action.link} target="_blank">
                                        <GitHubIcon />
                                    </IconButton>
                                );
                            } else if (action.name === 'instagram') {
                                return (
                                    <IconButton key={index} aria-label="Instagram" href={action.link} target="_blank">
                                        <InstagramIcon />
                                    </IconButton>
                                );
                            } else if (action.name === 'twitter') {
                                return (
                                    <IconButton key={index} aria-label="Twitter" href={action.link} target="_blank">
                                        <TwitterIcon />
                                    </IconButton>
                                );
                            }
                            return null;
                        })}
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
