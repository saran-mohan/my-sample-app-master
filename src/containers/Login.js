import React, { Component } from 'react';
import axios from 'axios';
import './Login.css';
import * as action from './../store/actions/actions';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            emailId: '',
            password: ''
        };
    }

    componentDidMount() {
        console.log('Login - Component did mount');
        // this.getData();
    }

    handleSignin = () => {
        console.log('signin', this.props);
        this.props.getUserDetails();
        // this.props.history.push('/dashboard');
        this.postData();
    }

    postData = () => {

        const request = {
            "name": this.state.emailId,
            "salary": this.state.password,
            "age": this.state.password
        };
        axios.post('http://dummy.restapiexample.com/api/v1/create', request)
            .then(response => {
                console.log(response);
                // this.getData();

                const data = {
                    email: this.state.emailId,
                    password: this.state.password
                };

                this.props.addUserLogin(data);
                this.props.history.push('/dashboard');
            })
            .catch(error => {
                console.log(error);
            });

        // const data = {
        //     email: this.state.emailId,
        //     password: this.state.password
        // };

        // this.props.addUserLogin(data);



    }

    getData = () => {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => {
                console.log(response);
                if (response.data.length) {
                    const data = {
                        userDetails: response.data
                    };

                    this.props.updateUserDetails(data);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    emailChange = (e) => {
        this.setState({ emailId: e.target.value });
    }

    passwordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <div className="container-fluid">
                <p>Email ID : {this.props.email} </p>
                <p>Password : {this.props.password} </p>
                <div className='row'>
                    <div className='col-md-2'>Email Id: </div>
                    <div className='col-md-10'>
                        <input type='email' className='email' placeholder='Email Id' value={this.state.email} onChange={this.emailChange} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-2'>Password: </div>
                    <div className='col-md-2'>
                        <input type='password' className='email' placeholder='Password' value={this.state.password} onChange={this.passwordChange} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 text-center'>
                        <button type='button' className="btn btn-primary" onClick={this.handleSignin}>Login</button>
                    </div>
                </div>
            </div>
        );
    }

}

export const mapStateToProps = state => {
    return {
        email: state.email,
        password: state.password
    };
}

export const mapDispatchToProps = dispatch => {
    return {
        // setEmail: data => dispatch(action.setEmail(data)),
        // setPassword: data => dispatch(action.setPassword(data)),
        addUserLogin: data => dispatch(action.addUserLogin(data)),
        updateUserDetails: data => dispatch(action.updateUserDetails(data)),
        getUserDetails: () => dispatch(action.getUserDetails())

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);