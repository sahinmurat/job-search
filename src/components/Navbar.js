import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import img from "../assets/logo1.png";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import firebase from "../firebase/Firebase.utils";
import { FirebaseAuthContext } from "../context/AuthContext";
import useStyles from './NavbarStyle'


export default function Navbar() {
  const { currentUser } = useContext(FirebaseAuthContext);
  const history = useHistory();
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const handleSignOut = () => {
    firebase.signOut();
    history.push("/");
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <FormGroup></FormGroup>
      <AppBar position="static">
        <Toolbar className={classes.container}>
          <img
            className={classes.logo}
            src={img}
            alt="logo"
            onClick={() => history.push("/")}
          />
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => history.push("/")}
          >
            Lighthouse Job Search
          </Typography>
          {currentUser ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Typography variant="h6" className={classes.title}>
                  {currentUser.displayName}
                </Typography>
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
              </Menu>
            </div>
          ) : (
              <>
                <ButtonGroup disableElevation variant="contained" color="primary">
                  <Button onClick={() => history.push("/login")}>Sign in</Button>
                  <Button onClick={() => history.push("/register")}>Sign up</Button>
                </ButtonGroup>
              </>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}