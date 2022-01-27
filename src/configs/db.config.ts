import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
  LOCAL_POSTGRES_HOST,
  LOCAL_POSTGRES_PASSWORD,
  LOCAL_POSTGRES_PORT,
  LOCAL_POSTGRES_USERNAME,
} from './local-vars.config';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || LOCAL_POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT || LOCAL_POSTGRES_PORT),
  username: process.env.POSTGRES_USERNAME || LOCAL_POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD || LOCAL_POSTGRES_PASSWORD,
  database: 'cv',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV !== 'production',
};
