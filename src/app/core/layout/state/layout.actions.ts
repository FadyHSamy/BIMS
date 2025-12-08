import { createAction } from '@ngrx/store';

export const openSidebar = createAction('[Layout] Open Sidebar');
export const toggleSidebar = createAction('[Layout] Toggle Sidebar');
export const closeSidebar = createAction('[Layout] Close Sidebar');

export const toggleTheme = createAction('[Layout] Toggle Theme');

