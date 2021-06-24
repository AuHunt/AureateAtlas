import React from 'react';
import './assets/styles/Team.scss';
import TeamImg from './assets/images/Lips.jpg';
import TeamImg1 from './assets/images/Bella1.jpg';

export default function Team() {
    return (
        <div className="Team-container">
            <div className="container-header">
                <div className="container-header-content">
                    <div className="container-header-title">Team</div>
                </div>
            </div>
            <div className="Team-members">
                <div className="Team-member-card">
                    <div className="Team-member-overview">
                        <div className="Team-member-img-wrapper">
                            <img className="Team-member-img" src={TeamImg} alt="Error loading Team project"></img>
                        </div>
                        <div className="Team-member-info">
                            <h2>Test</h2>
                            <p>Test Role</p>
                            <div className="Team-member-links"></div>
                        </div>
                    </div>
                    <div className="Team-member-content">
                        <h2>Hi, I&apos;m Nick</h2>
                        <p>
                            This is a test Team section. It will contain some text and probably a couple of links to
                            related information. This is a test Team section. It will contain some text and probably a
                            couple of links to related information. This is a test Team section. It will contain some
                            text and probably a couple of links to related information. This is a test Team section. It
                            will contain some text and probably a couple of links to related information. This is a test
                            Team section.
                        </p>
                    </div>
                </div>

                <div className="Team-member-card">
                    <div className="Team-member-overview">
                        <div className="Team-member-img-wrapper">
                            <img className="Team-member-img" src={TeamImg1} alt="Error loading Team project"></img>
                        </div>
                        <div className="Team-member-info">
                            <h2>Test</h2>
                            <p>Test Role</p>
                            <div className="Team-member-links"></div>
                        </div>
                    </div>
                    <div className="Team-member-content">
                        <h2>Hi, I&apos;m Bella</h2>
                        <p>
                            This is a test Team section. It will contain some text and probably a couple of links to
                            related information. This is a test Team section. It will contain some text and probably a
                            couple of links to related information. This is a test Team section. It will contain some
                            text and probably a couple of links to related information. This is a test Team section. It
                            will contain some text and probably a couple of links to related information. This is a test
                            Team section. It will contain some text and probably a couple of links to related
                            information. This is a test Team section. It will contain some text and probably a couple of
                            links to related information.
                        </p>
                    </div>
                </div>

                {/* <div className="Team-member-card">
                    <div className="Team-member-overview">
                        <div className="Team-member-img-wrapper">
                            <img className="Team-member-img" src={TeamImg} alt="Error loading Team project"></img>
                        </div>
                        <div className="Team-member-info">
                            <h2>Test</h2>
                            <p>Test Role</p>
                            <div className="Team-member-links"></div>
                        </div>
                    </div>
                    <div className="Team-member-content">
                        <h2>Hi, I'm Nick</h2>
                        <p>
                            This is a test Team section. It will contain some text and probably a couple of links to
                            related information. This is a test Team section. It will contain some text and probably a
                            couple of links to related information. This is a test Team section. It will contain some
                            text and probably a couple of links to related information. This is a test Team section. It
                            will contain some text and probably a couple of links to related information. This is a test
                            Team section. It will contain some text and probably a couple of links to related
                            information. This is a test Team section. It will contain some text and probably a couple of
                            links to related information.
                        </p>
                    </div>
                </div> */}

                {/* <div className="Team-member-card" style={{ opacity: 0 }}>
                    <div className="Team-member-overview"></div>
                    <div className="Team-member-content"></div>
                </div> */}
            </div>
        </div>
    );
}
