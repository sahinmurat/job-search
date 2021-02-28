import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


export default function App({item}) {
    const classes = useStyles();
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    console.log('item', item)


// Here is very important! i add the items on localstorage and update.
// because there is an array and i add the items on this array without losing anything on localstorage

    const addJob = async () => {
        let savedJobList = await localStorage.getItem('jobList');
        savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList)
        const updatedJobList = [...savedJobList, item];
        localStorage.setItem("jobList", JSON.stringify(updatedJobList));
        console.log('lcl', localStorage.getItem('jobList'))
    }   

    function saveJob() {
        setIsOpen(true);
        addJob();
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
// TODO
// button sholuld be active
    return (
        <div className={classes.root}>
            <CardActions disableSpacing onClick={saveJob}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </CardActions >
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={_subtitle => (subtitle = _subtitle)}>This job is added on your favorites</h2>
                <Button variant="contained" color="primary">
                    Go To Favorites
                </Button>
                <Button variant="contained" color="secondary">
                    Close
                </Button>
            </Modal>
        </div>
    );
}
