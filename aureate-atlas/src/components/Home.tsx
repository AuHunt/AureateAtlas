import { Typography } from '@material-ui/core';
import React from 'react';
import './assets/styles/Home.scss';
import TeamImg from './assets/images/Lips.jpg';
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="Home-container">
            <Typography className="Home-title" variant="h2" component="h2">
                Aureate Atlas
            </Typography>
            <Typography className="Home-body-haha" variant="body2">
                Hi! My name is Nicolas Ramirez-Diaz. I'm a remote full stack developer from the US East coast. I also
                work on a variety of projects dealing with robotics, IoT/computer networking, game programming, and much
                more. Looking forward to collaborating with others around the world.
            </Typography>
            <Typography className="Home-body-haha" variant="body2">
                Below you can find some of my programming projects and skills I've deleloped over time.
            </Typography>
            <div className="Home-profile-pic-wrapper">
                <img className="Home-profile-pic" src={TeamImg} alt=""></img>
            </div>
            <div className="Home-social-links-group">
                <a
                    href="https://www.linkedin.com/in/nicolas-ramirez-diaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Home-social-link"
                >
                    <FaLinkedin title="LinkedIn" />
                </a>
                <a
                    href="https://www.instagram.com/auhunter_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Home-social-link"
                >
                    <FaInstagramSquare title="Instagram" />
                </a>
                <a
                    href="https://github.com/AuHunt?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Home-social-link"
                >
                    <FaGithubSquare title="Github" />
                </a>
            </div>
        </div>
    );
}
