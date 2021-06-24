import React, { useState, MutableRefObject } from 'react';
import './assets/styles/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import clsx from 'clsx';
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import MenuIcon from '@material-ui/icons/Menu';

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

const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    }
});

export default function Header(props: IHeaderProps) {
    const headerButtons = ['Featured', 'Projects', 'Team', 'Contact'];
    const headerButtonIcons = [
        <EmojiObjectsIcon fontSize="large" className="Nav-option-button-icon" />,
        <FolderSpecialIcon fontSize="large" className="Nav-option-button-icon" />,
        <GroupWorkIcon fontSize="large" className="Nav-option-button-icon" />,
        <TrackChangesIcon fontSize="large" className="Nav-option-button-icon" />
    ];

    const classes = useStyles();
    const [drawerStatus, setDrawerStatus] = useState(false);

    const scrollToSection = (sectionRef: MutableRefObject<HTMLDivElement | null>) => {
        if (sectionRef.current) {
            window.scrollTo(0, sectionRef.current.offsetTop - 40);
        }

        setDrawerStatus(!drawerStatus);
    };

    const navToSection = (btn: string) => {
        switch (btn) {
            case 'Featured': {
                scrollToSection(props.featuredSectionRef);
                break;
            }
            case 'Projects': {
                scrollToSection(props.projectsSectionRef);
                break;
            }
            case 'Team': {
                scrollToSection(props.teamSectionRef);
                break;
            }
            case 'Contact': {
                scrollToSection(props.contactSectionRef);
                break;
            }
            default: {
                break;
            }
        }
    };

    const toggleNavDrawer = () => () => {
        setDrawerStatus(!drawerStatus);
    };

    const list = () => (
        <div
            className={
                clsx(classes.list, {
                    [classes.fullList]: false
                }) + ' Nav-drawer-content'
            }
            role="presentation"
            onClick={toggleNavDrawer()}
            onKeyDown={toggleNavDrawer()}
        >
            <List>
                {headerButtons.map((btn: string, index) => (
                    <ListItem button key={btn} onClick={() => navToSection(btn)} className={'Nav-option-button'}>
                        <ListItemIcon>{headerButtonIcons[index]}</ListItemIcon>
                        <ListItemText primary={btn} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const THEME = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    return (
        <div className="Header-container">
            <button className="Header-options-toggle" onClick={toggleNavDrawer()}>
                <FontAwesomeIcon icon={faBars} fixedWidth={false} size="lg" />
            </button>
            <MuiThemeProvider theme={THEME}>
                <Drawer anchor={'left'} open={drawerStatus} onClose={toggleNavDrawer()}>
                    {list()}
                </Drawer>
            </MuiThemeProvider>
            <span className="Header-web-title">{`AUREATE ATLAS`}</span>
            <button
                className="Header-options-toggle"
                style={{ color: '#080808', cursor: 'default', margin: '0% 3% 0% 3%' }}
            >
                <FontAwesomeIcon icon={faBars} fixedWidth={false} size="4x" />
            </button>
        </div>
    );
}
