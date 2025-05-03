import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.headers.authorization === 'Bearer myAuthToken') {
      next(); // Allow the request to proceed
    } else {
      res.status(401).send('Unauthorized');
    }
  }
}
