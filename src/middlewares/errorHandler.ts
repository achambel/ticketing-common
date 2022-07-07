import { NextFunction, Request, Response } from 'express'
import { CustomError } from '../errors/CustomError'

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serialize(),
    })
  }

  console.error(err)

  res.status(500).send({ errors: [{ message: 'Something went wrong!' }] })
}
