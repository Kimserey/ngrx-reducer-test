import { Action, combineReducers, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHello from './hello.reducer';

export interface State {
    hello: fromHello.State
}

export function reducers(state: State | undefined, action: Action) {
    return combineReducers({
        hello: fromHello.reducer
    })(state, action);
}

export const getHelloState = createFeatureSelector<State, fromHello.State>('hello');

export const getHelloMessage = createSelector(getHelloState, fromHello.getMessage);
