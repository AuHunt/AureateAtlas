import React, { MutableRefObject } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
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
    skillsSectionRef: MutableRefObject<HTMLDivElement | null>;
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
            case 2: {
                scrollToSection(props.skillsSectionRef);
                setValue(buttonIndex);
                break;
            }
            case 3: {
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
        <Container maxWidth="sm" className="Navigator-content">
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    navToSection(newValue);
                }}
                showLabels
                className={`${classes.root}`}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Projects" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Skills" icon={<StarIcon />} />
                <BottomNavigationAction label="Contact" icon={<EmojiPeopleIcon />} />
            </BottomNavigation>
        </Container>
    );
}
