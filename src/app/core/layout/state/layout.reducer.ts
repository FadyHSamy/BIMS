import { createReducer, on } from '@ngrx/store';
import * as LayoutActions from './layout.actions';
import { LayoutState } from './layout.models';

export const layoutFeatureKey = 'layout';

export const initialLayoutState: LayoutState = {
  isSidebarOpen: true,
  theme: 'light',
};

export const layoutReducer = createReducer(
  initialLayoutState,

  on(LayoutActions.openSidebar, (state) => ({
    ...state,
    isSidebarOpen: true,
  })),
  on(LayoutActions.closeSidebar, (state) => ({
    ...state,
    isSidebarOpen: false,
  })),
  on(LayoutActions.toggleTheme, (state) => ({
    ...state,
    theme: state.theme === 'light' ? 'dark' : 'light',
  }))
);
