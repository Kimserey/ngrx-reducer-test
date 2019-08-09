import { Action, combineReducers, createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import * as fromHello from './hello.reducer';
import * as fromBye from './bye.reducer';
import * as fromRoot from '../../reducer';

export const featureKey = 'hello';

export interface FeatureStates {
    [fromHello.helloReducerKey]: fromHello.State,
    [fromBye.byeReducerKey]: fromBye.State
}

export const FEATURE_REDUCERS = new InjectionToken<ActionReducerMap<FeatureStates>>('Hello feature reducers', {
    factory: () => {
        return {
            [fromHello.helloReducerKey]: fromHello.reducer,
            [fromBye.byeReducerKey]: fromBye.reducer
        };
    }
});

export interface State extends fromRoot.State {
    [featureKey]: FeatureStates
}

export const getFeatureStates = createFeatureSelector<State, FeatureStates>(featureKey);

export const getHelloState = createSelector(getFeatureStates, states => states[fromHello.helloReducerKey]);

export const getHelloMessage = createSelector(getHelloState, fromHello.getMessage);
