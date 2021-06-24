import React from 'react';
import './assets/styles/Intro.scss';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import featuredImg from './assets/images/ZephyrPrototype1.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%'
        },
        media: {
            height: 0,
            paddingTop: '56.25%' // 16:9
        },
        expand: {
            transform: 'rotate(180deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest
            })
        },
        expandOpen: {
            transform: 'rotate(0deg)'
        },
        arrowAcc: {
            float: 'right',
            paddingBottom: '5px'
        },
        projectDesc: {
            position: 'absolute',
            bottom: '0',
            background: 'rgba(0, 0, 0, 0.73)',
            width: '100%',
            boxSizing: 'border-box'
        }
    })
);

export default function Featured() {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="Featured-container">
            <div className="Featured-project">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image={featuredImg} title="Contemplative Reptile" />
                        <CardContent className={classes.projectDesc}>
                            <IconButton
                                className={
                                    clsx(classes.expand, {
                                        [classes.expandOpen]: expanded
                                    }) +
                                    ' ' +
                                    classes.arrowAcc
                                }
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                            <Typography gutterBottom variant="h5" component="h2">
                                Zephyr
                            </Typography>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Project for fast-paced parkour game</Typography>
                                </CardContent>
                            </Collapse>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}
