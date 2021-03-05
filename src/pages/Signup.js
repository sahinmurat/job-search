import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import firebase from '../firebase/Firebase.utils'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams, useHistory } from 'react-router-dom'
import useStyles from './SignupStyles'

export default function Signup() {
    const history = useHistory();
    const { slug } = useParams();
    const signupValidationSchema = Yup.object().shape({
        displayName: Yup.string().required("Display Name is required!!"),
        email: Yup.string().email("Invalid Email").required("Email is required!!"),
        password: Yup.string()
            .required("No password provided.")
            .min(8, "Password is too short - should be 8 chars minimum."),
    });

    const formik = useFormik({
        initialValues: {
            displayName: '',
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
                        // autoFocus
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
                        Sign Up
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
                        <Grid item>
                            <Link href="/login" variant="body2">
                                {"Already have an Account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
