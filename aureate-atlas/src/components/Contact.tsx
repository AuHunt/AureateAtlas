import React from 'react';
import './assets/styles/Contact.scss';
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';
import { GiRadarDish } from 'react-icons/gi';

export default function Contact() {
    return (
        <div className="Contact-container">
            <div className="Contact-card">
                <div className="Contact-preview">
                    <div className="Contact-info-message"></div>
                    <div className="Contact-img-wrapper">
                        <GiRadarDish size="10vw" />
                    </div>
                </div>
                <div className="Contact-links">
                    <a
                        href="https://www.linkedin.com/in/nicolas-ramirez-diaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Contact-link-wrapper"
                    >
                        <FaLinkedin title="LinkedIn" />
                    </a>
                    <a
                        href="https://www.instagram.com/auhunter_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Contact-link-wrapper"
                    >
                        <FaInstagramSquare title="Instagram" />
                    </a>
                    <a
                        href="https://github.com/AuHunt?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Contact-link-wrapper"
                    >
                        <FaGithubSquare title="Github" />
                    </a>
                </div>
                <div className="Contact-subheader">Ask me anything at nrma1990@gmail.com</div>
            </div>
        </div>
    );
}
