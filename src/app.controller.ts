import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CLIENT_INDEX_PATH } from './configs/file.paths';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getClient(@Res() response): void {
    try {
      response.sendFile(CLIENT_INDEX_PATH);
    } catch (e) {
      throw new Error(e);
    }
  }

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }
}
