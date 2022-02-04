import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { join } from 'path';
import { existsSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { v4 } from 'uuid';
import { STATIC_DIR_PATH } from '../configs/static.config';
import { ErrorMessage } from '../shared/enums';

@Injectable()
export class FileService {
  async create(file?: Express.Multer.File): Promise<string> {
    if (!file) {
      return '';
    }

    try {
      const fileName = `${v4()}.png`;

      if (!existsSync(STATIC_DIR_PATH)) {
        await mkdir(STATIC_DIR_PATH, { recursive: true });
      }

      await writeFile(join(STATIC_DIR_PATH, fileName), file.buffer);
      return fileName;
    } catch (e) {
      throw new HttpException(
        ErrorMessage.CantWrite,
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
