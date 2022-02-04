import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Technology } from '../technology/technology';

@Entity()
export class Project {
  @ApiProperty() @PrimaryGeneratedColumn() readonly id: number;
  @ApiProperty() @Column() name: string;
  @ApiProperty() @Column() description: string;
  @ApiProperty() @Column() deploy: string;
  @ApiProperty() @Column() repo: string;

  @ApiProperty({ type: [Technology] })
  @ManyToMany(() => Technology, (technology: Technology) => technology.projects)
  @JoinTable()
  technologies: Technology[];
}
