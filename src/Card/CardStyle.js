import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        borderRadius: '10px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        cursor: 'pointer',
        transition: 'background 1s',
        "&:hover": {
            background: "#b3d1ff",
            borderRadius: '10px',
        },
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: 'red'[500],
    },
}));