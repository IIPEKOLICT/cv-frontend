import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contact';
import { FileService } from '../file/file.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  controllers: [ContactController],
  providers: [ContactService, FileService],
})
export class ContactModule {}
