import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Technology } from './technology';
import { Repository } from 'typeorm';
import { from, map, Observable, switchMap } from 'rxjs';

@Injectable()
export class TechnologyService {
  constructor(
    @InjectRepository(Technology) private readonly techRepository: Repository<Technology>,
  ) {}

  getAll(): Observable<Technology[]> {
    return from(this.techRepository.find());
  }

  getOne(id: number): Observable<Technology> {
    return from(this.techRepository.findOne({ id }));
  }

  create(name: string, icon: string): Observable<Technology> {
    return from(
      this.techRepository.save(this.techRepository.create({ name, icon })),
    );
  }

  change(id: number, name: string, icon: string): Observable<Technology> {
    return from(this.techRepository.update(id, { name, icon })).pipe(
      switchMap(() => this.getOne(id)),
    );
  }

  delete(id: number): Observable<number> {
    return from(this.techRepository.delete({ id })).pipe(map(() => id));
  }
}
