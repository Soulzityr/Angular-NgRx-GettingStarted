import { Store } from '@ngrx/store';
import * as fromRoot from '../../state/app.state'

export interface State extends fromRoot.State {
    users: UserState
}

export interface UserState {
    maskUserName: boolean;
}

const initialState: UserState = {
    maskUserName: true
}


export function userReducer(state = initialState, action) {
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