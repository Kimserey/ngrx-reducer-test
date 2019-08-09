import { createReducer, on } from '@ngrx/store';
import { HelloActions } from '../actions';

export const byeReducerKey = 'bye';

export interface State {
    message?: string;
}

export const initialState: State = {
    message: 'Some state for the beginning of Bye.'
};

export const reducer = createReducer(
    initialState,
    on(
        HelloActions.sayBye,
        (state, { message }) => {
            return {
                ...state,
                message
            };
        }
    )
);

export const getMessage = (state: State) => state.message.toLocaleLowerCase();