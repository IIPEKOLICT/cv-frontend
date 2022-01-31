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
import { PostContactDto } from './dto/post-contact.dto';
import { FileService } from '../file/file.service';
import { PatchContactDto } from './dto/patch-contact.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiForbiddenResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ContactOperation } from '../shared/docs';

@ApiTags(Route.Contact)
@Controller(Route.Contact)
export class ContactController {
  constructor(
    private readonly contactService: ContactService,
    private readonly fileService: FileService,
  ) {}

  @ApiOperation({ summary: ContactOperation.Get })
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
    @Body() dto: PostContactDto,
    @UploadedFile() image,
  ): Promise<Observable<Contact>> {
    const icon = await this.fileService.create(image);
    return this.contactService.create(dto.name, dto.link, icon);
  }

  @ApiOperation({ summary: ContactOperation.Change })
  @ApiResponse({ type: Contact })
  @Patch()
  @UseInterceptors(FileInterceptor(Field.Icon))
  async change(
    @Body() dto: PatchContactDto,
    @UploadedFile() image,
  ): Promise<Observable<Contact>> {
    const icon = await this.fileService.create(image);
    return this.contactService.change(dto.id, dto.name, dto.link, icon);
  }

  @ApiOperation({ summary: ContactOperation.Delete })
  @ApiResponse({ type: Number })
  @Delete(`:${Field.Id}`)
  delete(@Param(Field.Id) id: number): Observable<number> {
    return this.contactService.delete(id);
  }
}
