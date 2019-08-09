import {
  Action,
  ActionReducerMap,
} from '@ngrx/store';

import { InjectionToken } from '@angular/core';

export interface State { }

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
factory: () => ({})
});
