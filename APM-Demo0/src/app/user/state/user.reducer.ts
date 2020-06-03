import { Store } from '@ngrx/store';

export function userReducer(state, action) {
    switch(action.type){
        
        case 'TOGGLE_MASK_USERNAME':
            console.log("Old State: " + JSON.stringify(state));
            console.log("payload: " + action.payload)
            return {
                ...state,
                maskUserName: action.payload
            }

        default:
            return state;
    }
}