import { JwtModuleOptions } from '@nestjs/jwt';
import { LOCAL_JWT_SECRET } from './local-vars.config';

export const jwtConfig: JwtModuleOptions = {
  secret: process.env.JWT_SECRET || LOCAL_JWT_SECRET,
  signOptions: {
    expiresIn: '3h',
  },
};
