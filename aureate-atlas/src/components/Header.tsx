import React, { useState, MutableRefObject } from 'react';
import './assets/styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

interface IHeaderProps {
    featuredSectionRef: MutableRefObject<HTMLDivElement | null>;
    projectsSectionRef: MutableRefObject<HTMLDivElement | null>;
    bioSectionRef: MutableRefObject<HTMLDivElement | null>;
    contactSectionRef: MutableRefObject<HTMLDivElement | null>;
}

export default function Header(props: IHeaderProps) {
    const [isHeaderOptions, setHeaderOptions] = useState(false);
    const [isFeaturedOption, setFeaturedOption] = useState(false);
    const [isProjectsOption, setProjectsOption] = useState(false);
    const [isBioOption, setBioOption] = useState(false);
    const [isContactOption, setContactOption] = useState(false);

    const headerButtons = ['featured', 'projects', 'bio', 'contact'];

    function isOption(btn: string) {
        switch (btn) {
            case 'featured': {
                return isFeaturedOption;
            }
            case 'projects': {
                return isProjectsOption;
            }
            case 'bio': {
                return isBioOption;
            }
            case 'contact': {
                return isContactOption;
            }
            default: {
                return false;
            }
        }
    }

    function toggleOption(btn: string) {
        switch (btn) {
            case 'featured': {
                if (!isFeaturedOption) {
                    toggleOffOtherOptions(btn);
                    setFeaturedOption(true);
                }
                scrollToSection(props.featuredSectionRef);
                break;
            }
            case 'projects': {
                if (!isProjectsOption) {
                    toggleOffOtherOptions(btn);
                    setProjectsOption(true);
                }
                scrollToSection(props.projectsSectionRef);
                break;
            }
            case 'bio': {
                if (!isBioOption) {
                    toggleOffOtherOptions(btn);
                    setBioOption(true);
                }
                scrollToSection(props.bioSectionRef);
                break;
            }
            case 'contact': {
                if (!isContactOption) {
                    toggleOffOtherOptions(btn);
                    setContactOption(true);
                }
                scrollToSection(props.contactSectionRef);
                break;
            }
            default: {
                break;
            }
        }
    }

    function toggleOffOtherOptions(btn: string) {
        for (let otherButton of headerButtons) {
            if (btn !== otherButton) {
                switch (otherButton) {
                    case 'featured': {
                        setFeaturedOption(false);
                        break;
                    }
                    case 'projects': {
                        setProjectsOption(false);
                        break;
                    }
                    case 'bio': {
                        setBioOption(false);
                        break;
                    }
                    case 'contact': {
                        setContactOption(false);
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }
        }
    }

    function scrollToSection(sectionRef: MutableRefObject<HTMLDivElement | null>) {
        if (sectionRef.current) {
            window.scrollTo(0, sectionRef.current.offsetTop - 40);
        }
    }

    return (
        <div className="Header-container">
            <CSSTransition
                in={isHeaderOptions}
                timeout={{
                    enter: 1000,
                    exit: 1000
                }}
                classNames="Header-options-toggle"
            >
                <button className="Header-options-toggle" onClick={() => setHeaderOptions(!isHeaderOptions)}>
                    <FontAwesomeIcon icon={faBars} fixedWidth={false} size="2x" />
                </button>
            </CSSTransition>
            {headerButtons.map((btn: string) => (
                <div key={btn + '-header-id'} className={'Header-section-button'}>
                    <CSSTransition
                        in={isHeaderOptions}
                        timeout={{
                            enter: 1000,
                            exit: 1000
                        }}
                        classNames={'Header-option-container'}
                    >
                        <div className={'Header-option-container'}>
                            <CSSTransition
                                in={isOption(btn)}
                                timeout={{
                                    enter: 1000,
                                    exit: 1000
                                }}
                                classNames={'Header-option-' + btn}
                            >
                                <button className={'Header-option-' + btn} onClick={() => toggleOption(btn)}>
                                    {btn.toUpperCase()}
                                </button>
                            </CSSTransition>
                        </div>
                    </CSSTransition>
                </div>
            ))}
        </div>
    );
}
