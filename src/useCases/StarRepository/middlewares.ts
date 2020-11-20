import { NextFunction, Request, Response } from 'express';

export default function auth(
  request: Request,
  response: Response,
  next: NextFunction,
): Response<any> | void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).send('Auth token is missing');
  }

  const [, token] = authHeader.split(' ');
  request.auth = token;

  return next();
}
