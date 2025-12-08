export interface LayoutState {
  isSidebarOpen: boolean;
  theme: 'light' | 'dark';
  currentPath: string | undefined;
}

export interface SideMenuItem {
  label: string;
  icon: string;
  route: string;
  children?: SideMenuItem[];
}
