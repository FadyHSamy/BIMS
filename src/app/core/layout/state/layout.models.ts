export interface LayoutState {
  isSidebarOpen: boolean;
  theme: 'light' | 'dark';
}

export interface SideMenuItem {
  label: string;
  icon: string;
  route: string;
  children?: SideMenuItem[];
}
