import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom:'10px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: 20,
        fontWeight: 600,
        fontSize: 28,
        paddingRight:'20px'
    },
    logo: {
        width: 50,
        borderRadius: 50,
        cursor: "pointer",
        "&:hover": {
            width: 50,
            borderRadius: 50,
        },
    },
    appbar:{
        backgroundColor:'#f9790d'
    },
    buttongroup:{
        backgroundColor:'white',
        border: '1px solid white',
        color:'#f9790d',
        fontSize:'14px',
        fontWeight:'700'
    }
}));