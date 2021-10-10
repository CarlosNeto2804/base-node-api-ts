import { StatusCode } from '../status-code';

export type CustomError = {
  statusCode: StatusCode;
  code: string;
  message: string;
};
