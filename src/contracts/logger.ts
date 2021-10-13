export interface Logger {
  debug(obj: Object, ...params: any[]): void;
  info(obj: Object, ...params: any[]): void;
  info(error: Error, ...params: any[]): void;
  info(format: any, ...params: any[]): void;
  warn(obj: Object, ...params: any[]): void;
  warn(format: any, ...params: any[]): void;
  error(error: Error, ...params: any[]): void;
  error(obj: Object, ...params: any[]): void;
  error(format: any, ...params: any[]): void;
}
