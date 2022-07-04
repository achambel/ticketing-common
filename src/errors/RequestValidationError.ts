import { ValidationError } from 'express-validator'
import { CustomError } from './CustomError'

export class RequestValidationError extends CustomError {
  statusCode = 400

  constructor(private errors: ValidationError[]) {
    super('Invalid Request parameters')

    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serialize() {
    return this.errors.map((err) => ({
      message: err.msg,
      field: err.param,
    }))
  }
}
