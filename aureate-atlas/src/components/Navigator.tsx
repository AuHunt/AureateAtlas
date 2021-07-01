import React, { MutableRefObject } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Container from '@material-ui/core/Container';
import './assets/styles/Navigator.scss';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'inherit'
    }
});

interface INavigatorProps {
    homeSectionRef: MutableRefObject<HTMLDivElement | null>;
    projectsSectionRef: MutableRefObject<HTMLDivElement | null>;
    teamSectionRef: MutableRefObject<HTMLDivElement | null>;
    contactSectionRef: MutableRefObject<HTMLDivElement | null>;
}

export default function Navigator(props: INavigatorProps) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const scrollToSection = (sectionRef: MutableRefObject<HTMLDivElement | null>) => {
        if (sectionRef.current) {
            window.scrollTo(0, sectionRef.current.offsetTop);
        }
    };

    const navToSection = (buttonIndex: number) => {
        switch (buttonIndex) {
            case 0: {
                scrollToSection(props.homeSectionRef);
                setValue(buttonIndex);
                break;
            }
            case 1: {
                scrollToSection(props.projectsSectionRef);
                setValue(buttonIndex);
                break;
            }
            // case 2: {
            //     scrollToSection(props.teamSectionRef);
            //     setValue(buttonIndex);
            //     break;
            // }
            case 2: {
                scrollToSection(props.contactSectionRef);
                setValue(buttonIndex);
                break;
            }
            default: {
                setValue(buttonIndex);
                break;
            }
        }
    };

    return (
        <Container maxWidth={false} className="Navigator-content">
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    navToSection(newValue);
                }}
                showLabels
                className={`${classes.root}`}
            >
                <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Projects" icon={<FavoriteIcon />} />
                {/* <BottomNavigationAction label="Team" icon={<LocationOnIcon />} /> */}
                <BottomNavigationAction label="Contact" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </Container>
    );
}
