import React, { useState } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment'
import { useHistory } from 'react-router-dom';
import useStyles from './CardStyle'
import Modal from '../helper/Modal'
import { useParams } from 'react-router-dom'
import ScheduleTwoToneIcon from '@material-ui/icons/ScheduleTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import AvTimerTwoToneIcon from '@material-ui/icons/AvTimerTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import CategoryTwoToneIcon from '@material-ui/icons/CategoryTwoTone';

export default function JobCard({ data }) {
    const history = useHistory();
    const { savedjobs } = useParams();
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const firstLetter = data.title.charAt(0)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const deleteJob = async () => {
        let savedJobList = await localStorage.getItem('jobList');
        savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList)
        const index = savedJobList.findIndex(x => x.id === data.id)
        if (index > -1) {
            savedJobList.splice(index, 1);
            localStorage.setItem("jobList", JSON.stringify(savedJobList))
            history.push('/savedjobs')
        }
    }
    console.log(data)
    return (
        <Card className={classes.root} >
            <div className={classes.header}>
                <Avatar aria-label="recipe" style={{ backgroundColor: '#f9790d' }} >
                    {firstLetter}
                </Avatar>
                <div  className={classes.header_right}>
                    <h2>{data.title}</h2>
                    <p>{moment(data.publication_date).format("MMM Do YY")}</p>
                </div>
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.detail}>
                    <AccountBalanceTwoToneIcon className={classes.detailIcon} /> <p className={classes.detailP}> Company Name : {data.company_name}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.detail}>
                    <AvTimerTwoToneIcon className={classes.detailIcon} /> <p className={classes.detailP}> Type : {data.job_type}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.detail}>
                    <CategoryTwoToneIcon className={classes.detailIcon} /> <p className={classes.detailP}> Category : {data.category}</p>
                </Typography>
            </CardContent>
            { savedjobs ?
                (
                    <Button className={classes.delete} onClick={deleteJob} color="secondary" variant="contained" >
                        Remove from favorites
                    </Button>

                ) :
                (<CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Modal item={data} />
                    </IconButton>
                    <Button
                        onClick={() => history.push(`/detail/${data.id}`, { params: { data } })}
                        variant="contained"
                        color="secondary"
                        size="small"
                        className={classes.button}
                        startIcon={<MoreHorizIcon />}
                    >
                        More
                    </Button>
                </CardActions>)}
        </Card>
    );
}


