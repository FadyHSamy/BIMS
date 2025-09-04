export interface ErrorsState {
  hasError: boolean;
  message: string | null;
  code?: string | number;
  feature?: string;
  datetime: string | null;
  severity?: 'info' | 'warning' | 'error' | null;
}
