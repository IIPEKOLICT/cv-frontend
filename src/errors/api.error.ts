import {
  BadRequestException,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { ErrorMessage } from '../shared/enums';

export class ApiError extends HttpException {
  constructor(
    code: number = HttpStatus.INTERNAL_SERVER_ERROR,
    message: string = ErrorMessage.Unknown
  ) {
    super({ message }, code);
  }

  static badRequest(message: string = ErrorMessage.WrongData) {
    throw new BadRequestException({ message });
  }

  static unauthorized(message: string = ErrorMessage.NoAuth) {
    throw new UnauthorizedException({ message });
  }

  static filesystem(message: string = ErrorMessage.CantWrite) {
    throw new InternalServerErrorException({ message });
  }
}
