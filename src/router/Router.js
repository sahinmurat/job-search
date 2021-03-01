import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Category from "../categories/Category";
import Detail from "../pages/Detail";
import React, { useContext, useState } from 'react';
import { FirebaseAuthContext } from '../context/AuthContext'
import SavedJob from "../savedJob/SavedJob";

function AppRouter() {
    const { currentUser } = useContext(FirebaseAuthContext);

    return (
        <Router>
            <Navbar />
            <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/login' component={Signin} />
            <Route exact path='/register' component={Signup} />
            <Route exact path='/category/:slug' component={currentUser ? Category : Signin} />
            <Route exact path='/detail/:id' component={Detail} />
            <Route exact path='/:savedjobs' component={SavedJob} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
