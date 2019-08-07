import { createReducer, on, Action } from '@ngrx/store';

import {
    HelloActions
} from '../actions';

export interface State {
    message?: string;
}

export const initialState: State = {
    message: 'Some state for the beginning.'
};

const helloReducer = createReducer(
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

export function reducer(state: State | undefined, action: Action) {
    return helloReducer(state, action);
}

export const getMessage = (state: State) => state.message.toLocaleLowerCase();