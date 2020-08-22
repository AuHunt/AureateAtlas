import React, { useState, MutableRefObject } from 'react';
import './assets/styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

// Libraries so you can refer to icons by name
// library.add(faCog);
// We're only adding faCoffee to the library so we can look it up.
// And we're only doing that to demonstrate how the API types might be used.
// This is not a realistic scenario. You wouldn't normally do things in such a round about way.
// It's really just to demonstrate use of the types.
// library.add(faCoffee);
// const coffeeLookup: IconLookup = { prefix: 'fas', iconName: 'coffee' };
// const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup);

interface IHeaderProps {
    featuredSectionRef: MutableRefObject<HTMLDivElement | null>;
    projectsSectionRef: MutableRefObject<HTMLDivElement | null>;
    teamSectionRef: MutableRefObject<HTMLDivElement | null>;
    contactSectionRef: MutableRefObject<HTMLDivElement | null>;
}

export default function Header(props: IHeaderProps) {
    const [isHeaderOptions, setHeaderOptions] = useState(false);
    const [isFeaturedOption, setFeaturedOption] = useState(false);
    const [isProjectsOption, setProjectsOption] = useState(false);
    const [isTeamOption, setTeamOption] = useState(false);
    const [isContactOption, setContactOption] = useState(false);

    const headerButtons = ['featured', 'projects', 'team', 'contact'];

    function isOption(btn: string) {
        switch (btn) {
            case 'featured': {
                return isFeaturedOption;
            }
            case 'projects': {
                return isProjectsOption;
            }
            case 'team': {
                return isTeamOption;
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
            case 'team': {
                if (!isTeamOption) {
                    toggleOffOtherOptions(btn);
                    setTeamOption(true);
                }
                scrollToSection(props.teamSectionRef);
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
        for (const otherButton of headerButtons) {
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
                    case 'team': {
                        setTeamOption(false);
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
