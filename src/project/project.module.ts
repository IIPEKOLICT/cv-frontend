import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project';
import { Technology } from '../technology/technology';
import { TechnologyService } from '../technology/technology.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Technology])],
  controllers: [ProjectController],
  providers: [ProjectService, TechnologyService],
})
export class ProjectModule {}
