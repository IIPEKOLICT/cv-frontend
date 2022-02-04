import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project';
import { Repository } from 'typeorm';
import { from, map, Observable } from 'rxjs';
import { ProjectDto } from './dto/project.dto';
import { Technology } from '../technology/technology';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  getAll(): Observable<Project[]> {
    return from(this.projectRepository.find());
  }

  async getOne(id: number): Promise<Project> {
    return this.projectRepository.findOne({ id });
  }

  async create(
    dto: ProjectDto,
    technologies: Technology[],
  ): Promise<Observable<Project>> {
    return from(
      this.projectRepository.save(
        this.projectRepository.create({
          name: dto.name,
          description: dto.description,
          repo: dto.repo,
          deploy: dto.deploy,
          technologies,
        }),
      ),
    );
  }

  async change(
    id: number,
    dto: ProjectDto,
    technologies: Technology[],
  ): Promise<Observable<Project>> {
    const project: Project = await this.getOne(id);

    project.name = dto.name;
    project.description = dto.description;
    project.deploy = dto.deploy;
    project.repo = dto.repo;
    project.technologies = technologies;

    return from(this.projectRepository.save(project));
  }

  delete(id: number): Observable<number> {
    return from(this.projectRepository.delete({ id })).pipe(map(() => id));
  }
}
