import { createAction, props } from '@ngrx/store';

export const sayHello = createAction('[Hello] Say Something', props<{ message: string }>());
export const sayBye = createAction('[Bye] Say Something', props<{ message: string }>());
