import { SET_USER, SET_ERRORS, CLER_LOADING, LOADING_UI, SET_AUTHENTICATED, SET_UNAUTHENTICATED} from '../types';

const intitialState = {
    authenticated: false,
    credentials: {},
    likes: [],
    notifications: []

};

export default function(state = initialState, action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {
                ...state,
                authenticated: true
            };
        case SET_UNAUTHENTICATED:
            return intitialState;
        case SET_USER:
            return {
                authenticated: true,
                ...action.payload
            };
        default:
            return state;
    }
}