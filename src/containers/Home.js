import React, { Component } from 'react';
import Login from './Login';
import Dashboard from './../components/Dashboard';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Login.css';
import { connect } from 'react-redux';
import store from './../store/createStore';

class Home extends Component {

    constructor(props) {
        super(props);
        this.storeState = {};
        console.log(props);
    }

    render() {

        store.subscribe(() => {
            this.storeState = store.getState();
        });

        console.log('Home store - state ', this.storeState);

        return (

            <div className="Login">

                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeStyle={{ color: 'green' }} > Home</NavLink></li>
                            <li><NavLink to="/login" exact activeClassName="active-link" >Login</NavLink></li>
                            <li><NavLink to="/dashboard" activeClassName="active-link" exact>Dashboard</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact render={() => <h3>Home Page</h3>} />
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
                <p>{this.storeState.login ? this.storeState.login.email : ''}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.email,
        password: state.password
    }
}

export default connect(mapStateToProps)(Home);