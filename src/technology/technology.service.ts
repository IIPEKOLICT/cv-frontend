import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Technology } from './technology';
import { Repository } from 'typeorm';
import { from, map, Observable, switchMap } from 'rxjs';

@Injectable()
export class TechnologyService {
  constructor(
    @InjectRepository(Technology)
    private readonly techRepository: Repository<Technology>,
  ) {}

  getAll(): Observable<Technology[]> {
    return from(this.techRepository.find());
  }

  async getOne(id: number): Promise<Technology> {
    return this.techRepository.findOne({ id });
  }

  async getTechnologies(ids: number[]): Promise<Technology[]> {
    const technologies: Technology[] = [];

    for (const id of ids) {
      const technology: Technology = await this.getOne(id);
      technologies.push(technology);
    }

    return technologies;
  }

  create(name: string, icon: string): Observable<Technology> {
    return from(
      this.techRepository.save(this.techRepository.create({ name, icon })),
    );
  }

  change(id: number, name: string, icon: string): Observable<Technology> {
    return from(this.techRepository.update(id, { name, icon })).pipe(
      switchMap(() => from(this.getOne(id))),
    );
  }

  delete(id: number): Observable<number> {
    return from(this.techRepository.delete({ id })).pipe(map(() => id));
  }
}
