import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Technology } from '../technology/technology';
import { Cv } from '../cv/cv';

@Entity()
export class Project {
  @ApiProperty() @PrimaryGeneratedColumn() readonly id: number;
  @ApiProperty() @Column() name: string;
  @ApiProperty() @Column() description: string;
  @ApiProperty() @Column() deploy: string;
  @ApiProperty() @Column() repo: string;
  @ApiProperty() @Column({ default: '' }) preview: string;

  @ApiProperty({ type: [Technology] })
  @ManyToMany(() => Technology, (technology: Technology) => technology.projects)
  @JoinTable()
  technologies: Technology[];

  @ManyToMany(() => Cv, (cv: Cv) => cv.projects, { cascade: true })
  cvs: Cv[];
}
