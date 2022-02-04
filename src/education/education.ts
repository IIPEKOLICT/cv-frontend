import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Education {
  @ApiProperty() @PrimaryGeneratedColumn() readonly id: number;
  @ApiProperty() @Column() place: string;
  @ApiProperty() @Column() speciality: string;
  @ApiProperty() @Column() startDate: string;
  @ApiProperty() @Column() endDate: string;
}
