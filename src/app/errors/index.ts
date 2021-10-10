import { CustomError, StatusCode } from '@/shared';

export const OriginNotAllowedByCors: CustomError = {
  statusCode: StatusCode.UNAUTHORIZED,
  code: 'GEN0001',
  message: 'Origem da request bloqueada pelo CORS',
};

export const MethodNotAllowed: CustomError = {
  statusCode: StatusCode.METHOD_NOT_ALLOWED,
  code: 'GEN0002',
  message: 'Method HTTP não habilitado para esta aplicação',
};
