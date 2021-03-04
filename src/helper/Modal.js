import React from 'react';
import Modal from 'react-modal';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        display: 'flex',
        justifyContent: 'space-around',
        marginRight:'15px'

    }
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


export default function App({ item }) {
    const history = useHistory();
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

    const goFavorites = () => {
        history.push('/savedjobs')
    }
    return (
        <div className={classes.root}>
            <CardActions disableSpacing onClick={saveJob}>
                <Button variant="contained" size="small" color="primary" startIcon={<FavoriteTwoToneIcon />}>
                    save
                 </Button>
            </CardActions >
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={_subtitle => (subtitle = _subtitle)}>This job is added on your favorites</h2>
                    <Button classname={classes.button} onClick={goFavorites} variant="contained" color="primary">
                        Go Favorites
                    </Button>
                    <Button onClick={closeModal} variant="contained" color="secondary" >
                        Close
                    </Button>
            </Modal>
        </div>
    );
}

