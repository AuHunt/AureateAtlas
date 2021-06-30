import React from 'react';
import './assets/styles/Contact.scss';
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';
import { GiRadarDish } from 'react-icons/gi';

export default function Contact() {
    return (
        <div className="Contact-container">
            <div className="Contact-container-icon">
                <GiRadarDish />
            </div>
            <div className="Contact-social-link-group">
                <a
                    href="https://www.linkedin.com/in/nicolas-ramirez-diaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Contact-social-link"
                >
                    <FaLinkedin title="LinkedIn" />
                </a>
                <a
                    href="https://www.instagram.com/auhunter_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Contact-social-link"
                >
                    <FaInstagramSquare title="Instagram" />
                </a>
                <a
                    href="https://github.com/AuHunt?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Contact-social-link"
                >
                    <FaGithubSquare title="Github" />
                </a>
            </div>
            <div className="Contact-subheader">Ask me anything at nrma1990@gmail.com</div>
        </div>
    );
}
