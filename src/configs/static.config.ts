import { ServeStaticModuleOptions } from '@nestjs/serve-static';
import { resolve } from 'path';

export const STATIC_DIR_PATH = resolve(__dirname, '..', '..', 'public');

export const staticConfig: ServeStaticModuleOptions = {
  rootPath: STATIC_DIR_PATH,
};
