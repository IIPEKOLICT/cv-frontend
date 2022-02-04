import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Cv } from '../cv/cv';

@Entity()
export class Employment {
  @ApiProperty() @PrimaryGeneratedColumn() readonly id: number;
  @ApiProperty() @Column() place: string;
  @ApiProperty() @Column() description: string;
  @ApiProperty() @Column() startDate: string;
  @ApiProperty() @Column() endDate: string;

  @ManyToMany(() => Cv, (cv: Cv) => cv.employments, { cascade: true })
  cvs: Cv[];
}
