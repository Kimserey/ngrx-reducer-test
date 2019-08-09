import { createReducer, on } from '@ngrx/store';
import { HelloActions } from '../actions';

export const helloReducerKey = 'hello';

export interface State {
    message?: string;
}

export const initialState: State = {
    message: 'Some state for the beginning of Hello.'
};

export const reducer = createReducer(
    initialState,
    on(
        HelloActions.sayHello,
        (state, { message }) => {
            return {
                ...state,
                message
            };
        }
    )
);

export const getMessage = (state: State) => state.message.toLocaleLowerCase();