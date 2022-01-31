import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact';
import { from, map, Observable, switchMap } from 'rxjs';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  getOne(id: number): Observable<Contact> {
    return from(this.contactRepository.findOne({ id }));
  }

  getAll(): Observable<Contact[]> {
    return from(this.contactRepository.find());
  }

  create(name: string, link: string, icon: string): Observable<Contact> {
    return from(
      this.contactRepository.save(
        this.contactRepository.create({ name, icon, link }),
      ),
    );
  }

  change(
    id: number,
    name: string,
    link: string,
    icon: string,
  ): Observable<Contact> {
    return from(this.contactRepository.update(id, { name, link, icon })).pipe(
      switchMap(() => this.getOne(id)),
    );
  }

  delete(id: number): Observable<number> {
    return from(this.contactRepository.delete({ id })).pipe(map(() => id));
  }
}
