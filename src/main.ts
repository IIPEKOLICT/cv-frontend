import { NestFactory } from '@nestjs/core';
import { RequestMethod } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { LOCAL_PORT } from './configs/local-vars.config';
import { swaggerConfig } from './configs/swagger.config';
import { Route } from './shared/enums';

async function bootstrap() {
  const port = process.env.PORT || LOCAL_PORT;
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix(Route.Api, {
    exclude: [{ path: '', method: RequestMethod.GET }],
  });

  const apiDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('', app, apiDocument);

  await app.listen(port, () =>
    console.log(`Server has been started on port ${port}`)
  );
}
bootstrap().then();
