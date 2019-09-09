import * as storeAction from '../actions/actions';

const initialState = {
    email: '',
    password: '',
    // userDetails: []
};

export const loginReducer = (state = initialState, action) => {
    console.log('reducer fn: ', action);
    switch (action.type) {

        case storeAction.ADD_USER:
            console.log('reducer fn - case ADD', action, state);
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            };

        case storeAction.GET_USER_DETAILS:
            console.log('reducer fn - case GET USER DETAILS', action, state);
            return {
                ...state
            };

        // case storeAction.UPDATE_USER_DETAILS:
        //     console.log('reducer fn - case UPDATE_USER_DETAILS', action, state);
        //     return {
        //         ...state,
        //         userDetails: action.payload.userDetails
        //     };

        // case storeAction.SET_EMAIL:
        //     console.log('reducer fn - case SET EMAIL', action, state);
        //     return {
        //         ...state,
        //         email: action.payload.email
        //     };

        // case storeAction.SET_PASSWORD:
        //     console.log('reducer fn - case SET PASSWORD', action, state);
        //     return {
        //         ...state,
        //         password: action.payload.password
        //     };


        default:
            return state;
    }

}