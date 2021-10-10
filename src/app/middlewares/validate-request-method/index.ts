import { Request, Response, NextFunction } from 'express';
import { MethodNotAllowed } from '@/app/errors';

export function validateMethod(allowedMethods: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (allowedMethods.includes(req.method)) {
      return next();
    }

    return res.status(MethodNotAllowed.statusCode).send(MethodNotAllowed);
  };
}
