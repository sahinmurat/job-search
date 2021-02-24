import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

export const styles = (theme) => ({
  root: {
    height: 64,
    [theme.breakpoints.up('sm')]: {
      height: 0,
    },
  },
});

export default withStyles(styles)(Toolbar);
