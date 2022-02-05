import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Field, Route } from '../shared/enums';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProjectService } from './project.service';
import { Observable } from 'rxjs';
import { Project } from './project';
import { ProjectOperation } from '../shared/docs';
import { ProjectDto } from './dto/project.dto';
import { Auth } from '../auth/auth.decorator';
import { AuthGuard } from '../auth/auth.guard';

@ApiTags(Route.Project)
@Controller(Route.Project)
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @ApiOperation({ summary: ProjectOperation.Get })
  @ApiResponse({ type: [Project] })
  @Get()
  getAll(): Observable<Project[]> {
    return this.projectService.getAll();
  }

  @ApiOperation({ summary: ProjectOperation.Create })
  @ApiResponse({ type: Project })
  @Auth()
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() dto: ProjectDto): Promise<Observable<Project>> {
    return this.projectService.create(dto);
  }

  @ApiOperation({ summary: ProjectOperation.Change })
  @ApiResponse({ type: Project })
  @Auth()
  @UseGuards(AuthGuard)
  @Put(`:${Field.Id}`)
  async change(
    @Param(Field.Id) id: number,
    @Body() dto: ProjectDto
  ): Promise<Observable<Project>> {
    return this.projectService.change(id, dto);
  }

  @ApiOperation({ summary: ProjectOperation.Delete })
  @ApiResponse({ type: Number })
  @Auth()
  @UseGuards(AuthGuard)
  @Delete(`:${Field.Id}`)
  delete(@Param(Field.Id) id: number): Observable<number> {
    return this.projectService.delete(id);
  }
}
