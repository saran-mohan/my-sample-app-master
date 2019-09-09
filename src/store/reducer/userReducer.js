import * as storeAction from './../actions/actions';

const initialState = {
    userDetails: []
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case storeAction.GET_USER_DETAILS:
            return {
                ...state,
            };
        case storeAction.UPDATE_USER_DETAILS:
            console.log('reducer fn - case UPDATE_USER_DETAILS', action, state);
            return {
                ...state,
                userDetails: action.payload.userDetails
            };
        default:
            return state;
    }

}

export default userReducer;