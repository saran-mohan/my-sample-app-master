import React from 'react';
import { connect } from 'react-redux';
// import * as action from './../store/actions/actions';

const Dashboard = (props) => {

    console.log('dashboard - props ', props, props.userDetails);
    let userList = null;
    if (props.userDetails.length > 0) {
        userList = (
            <ul>
                {props.userDetails.map(user => {
                    return <li key={user.id}>{user.employee_name} - {user.employee_salary}</li>
                })}
            </ul>
        )
    }

    return (
        <div>

            <h3>Dashboard Page</h3>

            <p>{props.email} - {props.password}</p>

            {userList}


        </div>
    );
}

export const mapStateToProps = props => {
    return {
        email: props.email,
        password: props.password,
        userDetails: props.userDetails
    }
}


// export const mapDispatchToProps = dispatch => {
//     return {
//         getUserDetails: () => dispatch(action.getUserDetails())
//     };
// }

export default connect(mapStateToProps)(Dashboard)