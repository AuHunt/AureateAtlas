import React from 'react';
import './assets/styles/Skills.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import { FaGamepad, FaHubspot, FaNetworkWired } from 'react-icons/fa';

const useStyles = makeStyles({
    root: {
        width: 275
    },
    title: {
        fontSize: 14
    }
});

export default function Skills() {
    const classes = useStyles();

    return (
        <div className="Skills-container">
            <div className="Container-header">skills</div>
            <Card className={`${classes.root} skill-overview-card`} variant="outlined">
                <CardContent>
                    <div className="skill-overview-card-icon skill-card-subsection-margin">
                        <FaGamepad size="50" color="gold" />
                    </div>
                    <Typography
                        variant="h5"
                        component="h5"
                        className="skill-overview-card-title skill-card-subsection-margin"
                    >
                        Game Developer
                    </Typography>
                    <Typography variant="body2" component="p" className="skill-card-subsection-margin">
                        Worked on projects big and small to develop a better understanding of game design.
                    </Typography>

                    <div className="skill-card-info skill-card-subsection-margin">
                        <Typography variant="body2" component="p" className="skill-card-subsection-title">
                            Languages:
                        </Typography>
                        <Typography variant="body2" component="p">
                            C# (preferred for Unity), Python, and C++
                        </Typography>
                    </div>

                    <div className="skill-card-info skill-card-subsection-margin">
                        <Typography variant="body2" component="p" className="skill-card-subsection-title">
                            Game engines:
                        </Typography>
                        <Typography variant="body2" component="p">
                            GameMaker Studios 2, UDK, and Unity (preferred)
                        </Typography>
                    </div>

                    <div className="skill-card-info skill-card-subsection-margin">
                        <Typography variant="body2" component="p" className="skill-card-subsection-title">
                            Other Tools:
                        </Typography>
                        <Typography variant="body2" component="p">
                            Blender, GIMP 2, Sound Force, Audacity, and Vegas Pro
                        </Typography>
                    </div>

                    <div className="skill-card-info skill-card-subsection-margin">
                        <Typography variant="body2" component="p" className="skill-card-subsection-title">
                            Projects:
                        </Typography>
                        <Typography variant="body2" component="p">
                            <ul className="skill-card-info-list">
                                <li>Pong (using Pygame)</li>
                                <li>Asteroids Recreation</li>
                                <li>Simple 2D Side Scroller</li>
                                <li>Networked 2D Side Scroller (low-level socket programming)</li>
                                <li>Zephyr (Multiplayer Mirror's Edge-like game)</li>
                            </ul>
                        </Typography>
                    </div>
                </CardContent>
            </Card>
            <Card className={`${classes.root} skill-overview-card`} square variant="outlined">
                <CardContent>
                    <div className="skill-overview-card-icon skill-card-subsection-margin">
                        <FaHubspot size="50" color="gold" />
                    </div>
                    <Typography
                        variant="h5"
                        component="h5"
                        className="skill-overview-card-title skill-card-subsection-margin"
                    >
                        Full Stack Developer
                    </Typography>
                    <Typography variant="body2" component="p" className="skill-card-subsection-margin">
                        Experienced developing web applications on both a personal and enterprise level.
                    </Typography>

                    <div className="skill-card-info skill-card-subsection-margin">
                        <Typography variant="body2" component="p" className="skill-card-subsection-title">
                            Languages:
                        </Typography>
                        <Typography variant="body2" component="p">
                            Javascript/Typescript, Java, HTML/HTML5, CSS/SCSS, Python, C#
                        </Typography>
                    </div>

                    <div className="skill-card-info skill-card-subsection-margin">
                        <Typography variant="body2" component="p" className="skill-card-subsection-title">
                            Frameworks &amp; Tools:
                        </Typography>
                        <Typography variant="body2" component="p">
                            React, Redux, Angular, Bootstrap, Material UI, Spring Boot, Hibernate, Selenium, Splunk, and
                            Node.JS
                        </Typography>
                    </div>

                    <div className="skill-card-info skill-card-subsection-margin">
                        <Typography variant="body2" component="p" className="skill-card-subsection-title">
                            Database Systems:
                        </Typography>
                        <Typography variant="body2" component="p">
                            MySQL, SQL, PL/SQL, and PostgreSQL
                        </Typography>
                    </div>

                    <div className="skill-card-info skill-card-subsection-margin">
                        <Typography variant="body2" component="p" className="skill-card-subsection-title">
                            CI/CD:
                        </Typography>
                        <Typography variant="body2" component="p">
                            Docker, Jenkins, and Splunk
                        </Typography>
                    </div>

                    <div className="skill-card-info skill-card-subsection-margin">
                        <Typography variant="body2" component="p" className="skill-card-subsection-title">
                            Projects:
                        </Typography>
                        <Typography variant="body2" component="p">
                            <ul className="skill-card-info-list">
                                <li>ADP Workforce Now</li>
                                <li>Online Testing System for Python</li>
                                <li>Discord Moderation Bot + Reddit Web Scraper</li>
                                <li>Youtube Web Scraper</li>
                            </ul>
                        </Typography>
                    </div>
                </CardContent>
            </Card>
            <Card className={`${classes.root} skill-overview-card`} variant="outlined">
                <CardContent>
                    <div className="skill-overview-card-icon skill-card-subsection-margin">
                        <FaNetworkWired size="50" color="gold" />
                    </div>
                    <Typography
                        variant="h5"
                        component="h5"
                        className="skill-overview-card-title skill-card-subsection-margin"
                    >
                        IoT Developer
                    </Typography>
                    <Typography variant="body2" component="p" className="skill-card-subsection-margin">
                        Connected drones, sensing modules, and communication nodes under an adaptive mesh network.
                    </Typography>

                    <div className="skill-card-info skill-card-subsection-margin">
                        <Typography variant="body2" component="p" className="skill-card-subsection-title">
                            Languages:
                        </Typography>
                        <Typography variant="body2" component="p">
                            Python, C++, Bash and Batch
                        </Typography>
                    </div>

                    <div className="skill-card-info skill-card-subsection-margin">
                        <Typography variant="body2" component="p" className="skill-card-subsection-title">
                            Embedded Systems:
                        </Typography>
                        <Typography variant="body2" component="p">
                            NodeMCU, GL-S10, GL-AR150, Raspberry Pi 3 Model B, Raspberry Pi Pico
                        </Typography>
                    </div>

                    <div className="skill-card-info skill-card-subsection-margin">
                        <Typography variant="body2" component="p" className="skill-card-subsection-title">
                            Additive Manufacturing (3D Printing):
                        </Typography>
                        <Typography variant="body2" component="p">
                            Ultimaker 3 and Makerbot Replicator
                        </Typography>
                    </div>

                    <div className="skill-card-info skill-card-subsection-margin">
                        <Typography variant="body2" component="p" className="skill-card-subsection-title">
                            Projects:
                        </Typography>
                        <Typography variant="body2" component="p">
                            <ul className="skill-card-info-list">
                                <li>3D Printed Recon Drone</li>
                                <li>Low Power Mesh Network</li>
                                <li>Visual Sensor Mapping Unit</li>
                            </ul>
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
