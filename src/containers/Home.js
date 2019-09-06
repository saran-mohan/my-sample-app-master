import React, { Component } from 'react';
import Login from './Login';
import Dashboard from './../components/Dashboard';
import { Route, Link, Switch } from 'react-router-dom';
import './Login.css';

export default class Home extends Component {
   
    constructor(props) {
        super(props);
        console.log(props);
    }


    render() {

        return (

            <div className="Login">

                <header>
                    <nav>
                        <ul>
                            <li><Link to="/" exact='true'>Home</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/dashboard" >Dashboard</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact render={() => <h3>Home Page</h3>} />
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        );
    }
}