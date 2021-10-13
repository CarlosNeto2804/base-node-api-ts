import { StatusCode } from '../status-code';

export type ApplicationError = {
  statusCode: StatusCode;
  code: string;
  message: string;
};
