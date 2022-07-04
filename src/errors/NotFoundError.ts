import { CustomError } from './CustomError'

export class NotFoundError extends CustomError {
  statusCode = 404

  constructor() {
    super('Route not found')

    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serialize() {
    return [
      {
        message: 'The resource you are looking for was not found!',
      },
    ]
  }
}
