import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Technology } from '../technology/technology';
import { Contact } from '../contact/contact';
import { Education } from '../education/education';
import { Employment } from '../employment/employment';
import { Project } from '../project/project';

@Entity()
export class Cv {
  @ApiProperty() @PrimaryGeneratedColumn() readonly id: number;
  @ApiProperty() @Column() name: string;
  @ApiProperty() @Column({ unique: true }) job: string;
  @ApiProperty() @Column() about: string;
  @ApiProperty() @Column() english: string;
  @ApiProperty() @Column({ default: '' }) photo: string;

  @ApiProperty({ type: [Contact] })
  @ManyToMany(() => Contact, (contact: Contact) => contact.cvs)
  @JoinTable()
  contacts: Contact[];

  @ApiProperty({ type: [Education] })
  @ManyToMany(() => Education, (education: Education) => education.cvs)
  @JoinTable()
  educations: Education[];

  @ApiProperty({ type: [Employment] })
  @ManyToMany(() => Employment, (employment: Employment) => employment.cvs)
  @JoinTable()
  employments: Employment[];

  @ApiProperty({ type: [Project] })
  @ManyToMany(() => Project, (project: Project) => project.cvs)
  @JoinTable()
  projects: Project[];

  @ApiProperty({ type: [Technology] })
  @ManyToMany(() => Technology, (technology: Technology) => technology.cvs)
  @JoinTable()
  technologies: Technology[];
}
