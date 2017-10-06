import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // console.log('Action received', action);
    switch(action.type) {
        case FETCH_WEATHER:
        // we are using concat instead of push because, this would 
        // create a new state object, instead of modifying the old 
        // state array. This is ensure immutability of the state object
        // return state.concat([action.payload.data]);
        return [ action.payload.data, ...state];
    }
    return state;
}