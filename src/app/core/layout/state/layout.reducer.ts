import { createReducer, on } from '@ngrx/store';
import * as LayoutActions from './layout.actions';
import { LayoutState } from './layout.models';

export const layoutFeatureKey = 'layout';

export const initialLayoutState: LayoutState = {
  isSidebarOpen: true,
  theme: 'light',
  currentPath: undefined,
};

export const layoutReducer = createReducer(
  initialLayoutState,

  on(LayoutActions.openSidebar, (state) => ({
    ...state,
    isSidebarOpen: true,
  })),
  on(LayoutActions.toggleSidebar, (state) => ({
    ...state,
    isSidebarOpen: !state.isSidebarOpen,
  })),
  on(LayoutActions.closeSidebar, (state) => ({
    ...state,
    isSidebarOpen: false,
  })),
  on(LayoutActions.toggleTheme, (state) => ({
    ...state,
    theme: state.theme === 'light' ? 'dark' : 'light',
  })),
  on(LayoutActions.setCurrentPath, (state, { currentPage }) => ({
    ...state,
    currentPath: currentPage,
  }))
);
