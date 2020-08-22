import React from 'react';
import './assets/styles/Featured.scss';
import featuredImg from './assets/images/ZephyrPrototype1.png';

export default function Featured() {
    return (
        <div className="Featured-container">
            <div className="Featured-project">
                <div className="Featured-project-content-wrapper">
                    <a href={featuredImg}>
                        <img
                            className="Featured-project-img"
                            src={featuredImg}
                            alt="Error loading featured project"
                        ></img>
                    </a>
                </div>
                <div className="Featured-project-info">
                    <h2>Test Featured</h2>
                    <p>
                        This is a test featured project. It will contain some text and probably a couple of links to
                        related information.
                    </p>
                </div>
            </div>
        </div>
    );
}
