/**
 * Created by hao.luo on 2017/7/5.
 */

import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactTest from './containers/index';
import Login from './containers/login';
import ErrorPage from './containers/ErrorPage';

class Routes extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                        <li><Link to="/ErrorPage">ErrorPage</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={ReactTest}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/ErrorPage" component={ErrorPage}/>
                </div>
            </Router>
        )
    }
}

export default Routes;