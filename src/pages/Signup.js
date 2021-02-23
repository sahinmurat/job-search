import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import firebase from '../firebase/Firebase.utils'
import { useFormik } from "formik";
import * as Yup from "yup";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Signup() {

    const signupValidationSchema = Yup.object().shape({
        displayName: Yup.string().required("Display Name is required!!"),
        email: Yup.string().email("Invalid Email").required("Email is required!!"),
        password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum."),
    });

    const formik = useFormik({
        initialValues: {
            displayName:'',
            email: "",
            password: "",
        },
        validationSchema: signupValidationSchema,
        onSubmit: values => {
            firebase.register(values.displayName, values.email, values.password);
            alert(JSON.stringify(values, null, 2));
        },
    });
   

  console.log('formik', formik)

    const classes = useStyles();
    console.log('firebase', firebase)

    const handleGoogleButtonClick = () => {
        firebase.useGoogleProvider();
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                 </Typography>
                <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Display Name"
                        name="displayName"
                        autoComplete="displayName"
                        autoFocus
                        // onChange = {formik.handleChange}
                        // value={formik.values.displayName}
                        {...formik.getFieldProps("displayName")}
                        error={formik.touched.displayName && formik.errors.displayName}
                        helperText={formik.touched.displayName && formik.errors.displayName}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        // onChange = {formik.handleChange}
                        // value={formik.values.email}
                        {...formik.getFieldProps("email")}
                        error={formik.touched.email && formik.errors.email}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        // onChange = {formik.handleChange}
                        // value={formik.values.password}

                        {...formik.getFieldProps("password")}
                        error={formik.touched.password && formik.errors.password}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Sign In
                     </Button>
                     <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleGoogleButtonClick}
                        >
                            SignUp with Google
                     </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            
        </Container>
    );
}





// import React from "react";
// import {
//     Button,
//     TextField,
//     Grid,
//     Container,
//     Avatar,
//     Typography,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { useFormik } from "formik";
// import firebase from "../firebase/firebase.utils";
// import * as Yup from "yup";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// const signUpValidationSchema = Yup.object().shape({
//     displayName: Yup.string().required("Display Name is required!!"),
//     email: Yup.string().email("Invalid Email").required("Email is required!!"),
//     password: Yup.string()
//         .required("No password provided.")
//         .min(8, "Password is too short - should be 8 chars minimum."),
// });

// const stylesFunc = makeStyles((theme) => ({
//     wrapper: {
//         marginTop: "10rem",
//         height: "calc(100vh - 19.0625rem)",
//         textAlign: "center",
//     },
//     avatar: {
//         margin: "1rem auto",
//         backgroundColor: theme.palette.secondary.main,
//     },
//     signUp: {
//         margin: "1rem",
//     },
// }));

// function Signup() {
//     const formik = useFormik({
//         initialValues: {
//             displayName: "",
//             email: "",
//             password: "",
//         },
//         validationSchema: signUpValidationSchema,
//         onSubmit: (values) => {
//             // alert(JSON.stringify(values, null, 2));
//             firebase.register(values.displayName, values.email, values.password);
//         },
//     });
//     const signupStyles = stylesFunc();

//     const handleGoogleButtonClick = () => {
//         firebase.useGoogleProvider();
//     };

//     return (
//         <Container className={signupStyles.wrapper} maxWidth="sm">
//             <Avatar className={signupStyles.avatar}>
//                 <LockOutlinedIcon />
//             </Avatar>
//             <Typography className={signupStyles.signUp} variant="h4">
//                 Sign Up
//       </Typography>
//             <form onSubmit={formik.handleSubmit}>
//                 <Grid container spacing={3}>
//                     <Grid item xs={12}>
//                         <TextField
//                             name="displayName"
//                             label="Display Name"
//                             variant="outlined"
//                             fullWidth
//                             {...formik.getFieldProps("displayName")}
//                             error={formik.touched.displayName && formik.errors.displayName}
//                             helperText={
//                                 formik.touched.displayName && formik.errors.displayName
//                             }
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             name="email"
//                             label="Email"
//                             variant="outlined"
//                             fullWidth
//                             {...formik.getFieldProps("email")}
//                             error={formik.touched.email && formik.errors.email}
//                             helperText={formik.touched.email && formik.errors.email}
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             name="password"
//                             label="Password"
//                             variant="outlined"
//                             type="password"
//                             fullWidth
//                             {...formik.getFieldProps("password")}
//                             error={formik.touched.password && formik.errors.password}
//                             helperText={formik.touched.password && formik.errors.password}
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Button type="submit" variant="contained" color="primary" fullWidth>
//                             Register
//             </Button>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <Button
//                             variant="contained"
//                             color="primary"
//                             fullWidth
//                             onClick={handleGoogleButtonClick}
//                         >
//                             SignUp with Google
//             </Button>
//                     </Grid>
//                     {/* 
//             //TODO: Add sign in text & links
//             */}
//                 </Grid>
//             </form>
//         </Container>
//     );
// }

// export default Signup;
