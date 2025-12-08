import { createAction, props } from '@ngrx/store';

export const openSidebar = createAction('[Layout] Open Sidebar');
export const toggleSidebar = createAction('[Layout] Toggle Sidebar');
export const closeSidebar = createAction('[Layout] Close Sidebar');

export const toggleTheme = createAction('[Layout] Toggle Theme');

export const setCurrentPath = createAction(
  '[Layout] Set Current Page',
  props<{ currentPage: string }>()
);
