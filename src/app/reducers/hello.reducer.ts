import { createReducer, on } from '@ngrx/store';

import {
    HelloActions
} from '../actions';

export interface State {
    message?: string;
}

export const initialState: State = {
    message: 'Some state for the beginning.'
};

export const reducer = createReducer(
    initialState,
    on(
        HelloActions.saySomething,
        (state, { message }) => {
            return {
                ...state,
                message
            };
        }
    )
);

export const getMessage = (state: State) => state.message;