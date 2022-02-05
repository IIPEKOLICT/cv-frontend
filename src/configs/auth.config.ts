import { LOCAL_LOGIN, LOCAL_PASSWORD } from './local-vars.config';

export const REQUIRED_LOGIN = process.env.ADMIN_LOGIN || LOCAL_LOGIN;
export const REQUIRED_PASSWORD = process.env.ADMIN_PASSWORD || LOCAL_PASSWORD;
