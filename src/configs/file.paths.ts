import { resolve } from 'path';

export const PUBLIC_DIR_PATH: string = resolve(__dirname, '..', '..', 'public');
export const CLIENT_DIR_PATH: string = resolve(
  __dirname,
  '..',
  '..',
  '..',
  'client',
  'dist',
  'client',
);
export const CLIENT_INDEX_PATH: string = `${CLIENT_DIR_PATH}/index.html`;
