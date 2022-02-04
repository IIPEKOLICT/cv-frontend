import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Field, Route } from '../shared/enums';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProjectService } from './project.service';
import { Observable } from 'rxjs';
import { Project } from './project';
import { ProjectOperation } from '../shared/docs';
import { ProjectDto } from './dto/project.dto';
import { TechnologyService } from '../technology/technology.service';
import { Technology } from '../technology/technology';

@ApiTags(Route.Project)
@Controller(Route.Project)
export class ProjectController {
  constructor(
    private readonly projectService: ProjectService,
    private readonly technologyService: TechnologyService,
  ) {}

  @ApiOperation({ summary: ProjectOperation.Get })
  @ApiResponse({ type: [Project] })
  @Get()
  getAll(): Observable<Project[]> {
    return this.projectService.getAll();
  }

  @ApiOperation({ summary: ProjectOperation.Create })
  @ApiResponse({ type: Project })
  @Post()
  async create(@Body() dto: ProjectDto): Promise<Observable<Project>> {
    const technologies: Technology[] =
      await this.technologyService.getTechnologies(dto.technologies);
    return this.projectService.create(dto, technologies);
  }

  @ApiOperation({ summary: ProjectOperation.Change })
  @ApiResponse({ type: Project })
  @Put(`:${Field.Id}`)
  async change(
    @Param(Field.Id) id: number,
    @Body() dto: ProjectDto,
  ): Promise<Observable<Project>> {
    const technologies: Technology[] =
      await this.technologyService.getTechnologies(dto.technologies);
    return this.projectService.change(id, dto, technologies);
  }

  @ApiOperation({ summary: ProjectOperation.Delete })
  @ApiResponse({ type: Number })
  @Delete(`:${Field.Id}`)
  delete(@Param(Field.Id) id: number): Observable<number> {
    return this.projectService.delete(id);
  }
}
