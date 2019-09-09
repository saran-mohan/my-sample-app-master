import React from 'react';
import { connect, useSelector } from 'react-redux';
// import * as action from './../store/actions/actions';

const Dashboard = (props) => {
    const state = useSelector(state => state);
    console.log('use selector - state', state);

    console.log('dashboard - props ', props);
    let userList = null;
    // if (state.users.userDetails.length > 0) {
    //     userList = (
    //         <ul>
    //             {state.users.userDetails.map(user => {
    //                 return <li key={user.id}>{user.employee_name} - {user.employee_salary}</li>
    //             })}
    //         </ul>
    //     )
    // }
    
    if (state.users.userDetails.length > 0) {
        userList = state.users.userDetails.map(user => (
            <tr key={user.id}>
                <td>{user.employee_name}</td>
                <td>{user.employee_salary}</td>
            </tr>
        ));
    }

    return (
        <div>

            <h3>Dashboard Page</h3>

            <p>{state.login.email} - {state.login.password}</p>

            {/* {userList} */}

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {userList}
                </tbody>
            </table>


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