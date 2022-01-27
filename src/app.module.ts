import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dbConfig } from './configs/db.config';
import { staticConfig } from './configs/static.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot(staticConfig),
    TypeOrmModule.forRoot(dbConfig)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
