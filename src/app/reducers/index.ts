import { Action, combineReducers, createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromHello from './hello.reducer';

export interface State {
    hello: fromHello.State
}

export const initialState = {
    hello: fromHello.initialState
};

export const reducers = {
    hello: fromHello.reducer
};

export const getHelloState = createFeatureSelector<State, fromHello.State>('hello');
export const getHelloMessage = createSelector(getHelloState, fromHello.getMessage);
