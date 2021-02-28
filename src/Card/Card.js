import React, {useState} from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment'
import { useHistory } from 'react-router-dom';
import useStyles from './CardStyle'
import Modal from '../helper/Modal'


export default function JobCard({ data }) {
    const history = useHistory();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card className={classes.root} >
            <CardHeader
                avatar={
                    // avatar style from the style componnt doesn't work, thats why inline style
                    <Avatar  aria-label="recipe" style={{ backgroundColor: ' #cc0000' }} >
                        R
                    </Avatar>
                }
                title={data.title}
                subheader={moment(data.publication_date).format("MMM Do YY")}
            />
            <CardMedia onClick={() => history.push(`/detail/${data.id}`, { params: { data } })}
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
            />
            <div
                className={classes.overlay2}
                onClick={() => history.push(`/detail/${data.id}`, { params: { data } })}
            >
                <Button style={{ color: "black" }} size="small">
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Company Name : {data.company_name}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Modal item={data} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon  />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
          </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
          </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}


