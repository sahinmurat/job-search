import React from 'react';
import { createContext, useState, useEffect } from "react";
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
import Container from '@material-ui/core/Container';
import firebase from '../firebase/Firebase.utils'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import useStyles from './SigninStyles'

export default function Signin() {
    const history = useHistory();
    const { slug } = useParams();

    const signinValidationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid Email").required("Email is required!!"),
        password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum."),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: signinValidationSchema,
        onSubmit: values => {
            firebase.signIn(values.email, values.password);
            slug ? history.push(`/category/${slug}`) : history.push('/');
        },
    });

    const classes = useStyles();

    const handleGoogleButtonClick = () => {
        firebase?.useGoogleProvider();
        slug ? history.push(`/category/${slug}`) : history.push('/');
    };
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                 </Typography>
                <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    // {...formik.getFieldProps("email")}
                    // error={formik.touched.email && formik.errors.email}
                    // helperText={formik.touched.email && formik.errors.email}
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
                        onChange={formik.handleChange}
                        value={formik.values.password}

                    // {...formik.getFieldProps("password")}
                    // error={formik.touched.password && formik.errors.password}
                    // helperText={formik.touched.password && formik.errors.password}
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

