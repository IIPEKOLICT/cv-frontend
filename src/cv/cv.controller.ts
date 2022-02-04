import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
} from '@nestjs/common';
import { Field, Route } from '../shared/enums';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CvService } from './cv.service';
import { Observable } from 'rxjs';
import { Cv } from './cv';
import { CvOperation } from '../shared/docs';
import { CvDto } from './dto/cv.dto';
import { FileService } from '../file/file.service';

@ApiTags(Route.Cv)
@Controller(Route.Cv)
export class CvController {
  constructor(
    private readonly cvService: CvService,
    private readonly fileService: FileService
  ) {}

  @ApiOperation({ summary: CvOperation.GetAll })
  @ApiResponse({ type: [Cv] })
  @Get()
  getAll(): Observable<Cv[]> {
    return this.cvService.getAll();
  }

  @ApiOperation({ summary: CvOperation.GetCurrent })
  @ApiResponse({ type: Cv })
  @Get(`:${Field.Id}`)
  getCurrent(@Param(Field.Id) id: number): Observable<Cv> {
    return this.cvService.getCurrent(id);
  }

  @ApiOperation({ summary: CvOperation.Create })
  @ApiResponse({ type: Cv })
  @Post()
  async create(
    @Body() dto: CvDto,
    @UploadedFile() image?: Express.Multer.File
  ): Promise<Observable<Cv>> {
    const photo = await this.fileService.create(image);
    return this.cvService.create(dto, photo);
  }

  @ApiOperation({ summary: CvOperation.Change })
  @ApiResponse({ type: Cv })
  @Put(`:${Field.Id}`)
  async change(
    @Param(Field.Id) id: number,
    @Body() dto: CvDto,
    @UploadedFile() image?: Express.Multer.File
  ): Promise<Observable<Cv>> {
    const photo = await this.fileService.create(image);
    return this.cvService.change(id, dto, photo);
  }

  @ApiOperation({ summary: CvOperation.Delete })
  @ApiResponse({ type: Number })
  @Delete(`:${Field.Id}`)
  delete(@Param(Field.Id) id: number): Observable<number> {
    return this.cvService.delete(id);
  }
}
