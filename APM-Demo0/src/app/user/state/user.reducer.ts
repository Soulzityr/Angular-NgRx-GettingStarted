import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state'
import { User } from '../user';

export interface State extends fromRoot.State {
    users: UserState
}

export interface UserState {
    maskUserName: boolean;
    currentUser: User
}

const initialState: UserState = {
    maskUserName: true,
    currentUser: null
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
)

export function userReducer(state = initialState, action): UserState {
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