import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Field, Route } from '../shared/enums';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileService } from '../file/file.service';
import { TechnologyService } from './technology.service';
import { Observable } from 'rxjs';
import { Technology } from './technology';
import { TechnologyOperation } from '../shared/docs';
import { FileInterceptor } from '@nestjs/platform-express';
import { TechnologyDto } from './dto/technology.dto';
import { ContactDto } from '../contact/dto/contact.dto';

@ApiTags(Route.Technology)
@Controller(Route.Technology)
export class TechnologyController {
  constructor(
    private readonly fileService: FileService,
    private readonly technologyService: TechnologyService
  ) {}

  @ApiOperation({ summary: TechnologyOperation.Get })
  @ApiResponse({ type: [Technology] })
  @Get()
  getAll(): Observable<Technology[]> {
    return this.technologyService.getAll();
  }

  @ApiOperation({ summary: TechnologyOperation.Create })
  @ApiResponse({ type: Technology })
  @Post()
  @UseInterceptors(FileInterceptor(Field.Icon))
  async create(
    @Body() dto: TechnologyDto,
    @UploadedFile() image,
  ): Promise<Observable<Technology>> {
    const icon = await this.fileService.create(image);
    return this.technologyService.create(dto.name, icon);
  }

  @ApiOperation({ summary: TechnologyOperation.Change })
  @ApiResponse({ type: Technology })
  @Patch(`:${Field.Id}`)
  @UseInterceptors(FileInterceptor(Field.Icon))
  async change(
    @Param(Field.Id) id: number,
    @Body() dto: ContactDto,
    @UploadedFile() image,
  ): Promise<Observable<Technology>> {
    const icon = await this.fileService.create(image);
    return this.technologyService.change(id, dto.name, icon);
  }

  @ApiOperation({ summary: TechnologyOperation.Delete })
  @ApiResponse({ type: Number })
  @Delete(`:${Field.Id}`)
  delete(@Param(Field.Id) id: number): Observable<number> {
    return this.technologyService.delete(id)
  }
}