import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Main from '../components/Main'

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Main} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
