import { SetMetadata } from '@nestjs/common';
import { AUTH_KEY } from '../shared/constants';
import { REQUIRED_LOGIN, REQUIRED_PASSWORD } from '../configs/auth.config';

export const Auth = () =>
  SetMetadata(AUTH_KEY, `${REQUIRED_LOGIN} ${REQUIRED_PASSWORD}`);
