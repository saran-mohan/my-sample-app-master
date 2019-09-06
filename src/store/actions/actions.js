import axios from 'axios';

export const ADD_USER = 'ADD_USER';
export const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS';
export const GET_USER_DETAILS = 'GET_USER_DETAILS';
// export const SET_EMAIL = 'SET_EMAIL';
// export const SET_PASSWORD = 'SET_PASSWORD';

export const addUserLogin = data => {
    return {
        type: ADD_USER,
        payload: data
    }
};

export const updateUserDetails = data => {
    return {
        type: UPDATE_USER_DETAILS,
        payload: data
    }
};

export const getUsers = () => {
    return {
        type: GET_USER_DETAILS
    }
}

export function getUserDetails() {
    console.log('get user details - action');
    return function (dispatch) {
        dispatch(getUsers());
        return axios.get('http://dummy.restapiexample.com/api/v1/employees').then(response => {
            console.log('Action - get User Details - response', response);
            if (response.data.length) {
                const data = {
                    userDetails: response.data
                };

                dispatch(updateUserDetails(data));
            }
        })
            .catch(error => {
                console.log(error);
            });
    }
}

// export const setEmail = data => {
//     return {
//         type: SET_EMAIL,
//         payload: data
//     }
// };

// export const setPassword = data => {
//     return {
//         type: SET_PASSWORD,
//         payload: data
//     }
// };

