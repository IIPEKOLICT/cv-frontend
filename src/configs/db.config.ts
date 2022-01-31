import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LOCAL_POSTGRES_URL } from './local-vars.config';
import { Contact } from '../contact/contact';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_URL || LOCAL_POSTGRES_URL,
  entities: [Contact],
  synchronize: process.env.NODE_ENV !== 'production',
};
