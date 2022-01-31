import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LOCAL_DATABASE_URL } from './local-vars.config';
import { Contact } from '../contact/contact';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL || LOCAL_DATABASE_URL,
  entities: [Contact],
  synchronize: true,
};
