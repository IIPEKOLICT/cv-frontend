import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Field, Route } from '../shared/enums';
import { ContactService } from './contact.service';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { ContactDto } from './dto/contact.dto';
import { FileService } from '../file/file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ContactOperation, TechnologyOperation } from '../shared/docs';

@ApiTags(Route.Contact)
@Controller(Route.Contact)
export class ContactController {
  constructor(
    private readonly contactService: ContactService,
    private readonly fileService: FileService,
  ) {}

  @ApiOperation({ summary: TechnologyOperation.Get })
  @ApiResponse({ type: [Contact] })
  @Get()
  getAll(): Observable<Contact[]> {
    return this.contactService.getAll();
  }

  @ApiOperation({ summary: ContactOperation.Create })
  @ApiResponse({ type: Contact })
  @Post()
  @UseInterceptors(FileInterceptor(Field.Icon))
  async create(
    @Body() dto: ContactDto,
    @UploadedFile() image,
  ): Promise<Observable<Contact>> {
    const icon = await this.fileService.create(image);
    return this.contactService.create(dto.name, dto.link, icon);
  }

  @ApiOperation({ summary: ContactOperation.Change })
  @ApiResponse({ type: Contact })
  @Patch(`:${Field.Id}`)
  @UseInterceptors(FileInterceptor(Field.Icon))
  async change(
    @Param(Field.Id) id: number,
    @Body() dto: ContactDto,
    @UploadedFile() image,
  ): Promise<Observable<Contact>> {
    const icon = await this.fileService.create(image);
    return this.contactService.change(id, dto.name, dto.link, icon);
  }

  @ApiOperation({ summary: ContactOperation.Delete })
  @ApiResponse({ type: Number })
  @Delete(`:${Field.Id}`)
  delete(@Param(Field.Id) id: number): Observable<number> {
    return this.contactService.delete(id);
  }
}
