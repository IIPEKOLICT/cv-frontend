import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LOCAL_DATABASE_URL } from './local-vars.config';
import { Contact } from '../contact/contact';
import { Technology } from '../technology/technology';
import { Project } from '../project/project';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL || LOCAL_DATABASE_URL,
  entities: [Contact, Technology, Project],
  synchronize: true,
};
