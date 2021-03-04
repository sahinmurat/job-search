import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button:{
        border:' 2px solid red ',
        backgroundColor:'white',
        color:'red',
        lineHeight:' 15px',
        width: 'auto',
        fontWeight:'600',
        fontSize: '12pt',
        fontFamily: 'tahoma',
        marginTop: '5px',
        marginRight: '5px',
        position:'fixed',
        top:15,
        right:'43%',
        boxShadow:'3px -3px #ffc266'
    }
}));