import { createAction } from '@ngrx/store';

export const startLoader = createAction('[Loader/API] Start Loader');

export const stopLoader = createAction('[Loader/API] stopLoader');
