import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Project } from '../project/project';

@Entity()
export class Technology {
  @ApiProperty() @PrimaryGeneratedColumn() readonly id: number;
  @ApiProperty() @Column({ unique: true }) name: string;
  @ApiProperty() @Column() icon: string;

  @ManyToMany(() => Project, (project: Project) => project.technologies, {
    cascade: true,
  })
  projects: Project[];
}
