import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project';
import { Technology } from '../technology/technology';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Technology])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
