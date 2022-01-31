import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LOCAL_DATABASE_URL } from './local-vars.config';
import { Contact } from '../contact/contact';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.POSTGRES_URL || LOCAL_DATABASE_URL,
  entities: [Contact],
  synchronize: process.env.NODE_ENV !== 'production',
};
