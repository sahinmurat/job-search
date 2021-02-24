import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Category from "../categories/Category";

function AppRouter() {
    console.log(process.env)
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/login' component={Signin} />
                <Route exact path='/register' component={Signup} />
                <Route exact path='/category/:slug' component={Category} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
