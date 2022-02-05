import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { AUTH_KEY, TOKEN_TYPE } from '../shared/constants';
import { Reflector } from '@nestjs/core';
import { AuthDto } from './dto/auth.dto';
import { ApiError } from '../errors/api.error';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector
  ) {}

  private getField(context: ExecutionContext, key: string): string {
    return this.reflector.getAllAndOverride<string>(key, [
      context.getHandler(),
      context.getClass(),
    ]);
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    try {
      const authHeader = request.headers.authorization.split(' ');
      const requiredAuthData = this.getField(context, AUTH_KEY).split(' ');
      const requiredLogin = requiredAuthData[0];
      const requiredPassword = requiredAuthData[1];
      const tokenType = authHeader[0];
      const token = authHeader[1];

      if (tokenType !== TOKEN_TYPE || !token) {
        ApiError.unauthorized();
      }

      const authData: AuthDto = this.jwtService.verify(token);

      if (
        authData.login !== requiredLogin ||
        authData.password !== requiredPassword
      ) {
        ApiError.unauthorized();
      }

      return true;
    } catch (e) {
      ApiError.unauthorized();
    }
  }
}
