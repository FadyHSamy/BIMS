export interface SetError {
  message: string | null;
  code?: string | number;
  feature?: string;
  severity?: 'info' | 'warning' | 'error';
}
