import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CLIENT_DIR_PATH, PUBLIC_DIR_PATH } from './configs/file.paths';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: PUBLIC_DIR_PATH,
      serveRoot: '/'
    }),
    ServeStaticModule.forRoot({
      rootPath: CLIENT_DIR_PATH,
      serveRoot: '/',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
