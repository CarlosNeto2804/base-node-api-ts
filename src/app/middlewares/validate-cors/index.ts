import { Request, Response, NextFunction } from 'express';
import { OriginNotAllowedByCors } from '@/app/errors';

export function validateOrigin(allowedOrigin: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (allowedOrigin.includes('*')) {
      return next();
    }

    if (allowedOrigin.includes(req.get('origin'))) {
      return next();
    }

    return res
      .status(OriginNotAllowedByCors.statusCode)
      .send(OriginNotAllowedByCors);
  };
}
