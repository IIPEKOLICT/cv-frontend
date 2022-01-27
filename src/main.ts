import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { LOCAL_PORT } from './configs/local.vars';

async function bootstrap() {
  const port = process.env.PORT || LOCAL_PORT;
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(port, () => console.log(`Server has been started on port ${port}`));
}
bootstrap().then();
