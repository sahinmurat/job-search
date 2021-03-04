import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        borderRadius: '10px',
        border:'1px solid #ff4000'
    },
   header:{
       display:'flex',
       alignItems:'center',
       
       margin:'5px'
   },
   header_right:{
       marginLeft:'10px',
       alignItems:'center',
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
        backgroundColor: '#f9790d',
    },
    detail:{
        display:'flex',    
        margin:'20px'    
    },
    detailIcon:{
        display:'flex',
        marginTop:'10px',
        marginRight:'10px'
    },
    detailP:{
        display:'flex'
    },
    delete:{
        margin:'10px 50px',
        fontSize:'15px'
    },
    category:{
        textAlign:'center',
        fontSize:'15px'
    }
}));