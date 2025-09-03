import { createAction } from '@ngrx/store';

export const toggleLoading = createAction('[Settings] Toggle Loading');
export const startLoading = createAction('[Settings] Start Loading');
export const stopLoading = createAction('[Settings] Stop Loading');
export const resetLoader = createAction('[Settings] Reset Loader');

export const increaseLoader = createAction('[Settings] Increase Loader');
export const decreaseLoader = createAction('[Settings] Decrease Loader');
