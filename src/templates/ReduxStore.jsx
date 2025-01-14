import { createStore } from "redux";

const initialState = {
    isAuthenticated: false,
    user: '',
}

function authReducer(state = initialState, action) {

    switch (action.type) {
        case 'LOGIN':
            return {
                isAuthenticated: true,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                isAuthenticated: false,
                user: '',
            };
        default:
            return state;
    }

}

//create Redux Store.
const store = createStore(authReducer);

export default store;
