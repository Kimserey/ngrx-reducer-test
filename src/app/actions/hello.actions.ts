import { createAction, props } from '@ngrx/store';

export const saySomething = createAction('[Hello] Say Something', props<{ message: string }>());
