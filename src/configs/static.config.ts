import { ServeStaticModuleOptions } from '@nestjs/serve-static';
import { resolve } from 'path';

export const staticConfig: ServeStaticModuleOptions = {
  rootPath: resolve(__dirname, '..', '..', 'public'),
};
