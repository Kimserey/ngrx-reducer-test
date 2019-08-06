import { createReducer, on } from '@ngrx/store';

import {
    HelloActions
} from '../actions';

export interface State {
    message?: string;
}

export const initialState: State = {};

export const reducer = createReducer(
    initialState,
    on(
        HelloActions.saySomething,
        (state, { message }) => {
            console.log('test');
            return {
                message,
                ...state
            };
        }
    )
);

export const getMessage = (state: State) => state.message;