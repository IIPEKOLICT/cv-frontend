import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Employment {
  @ApiProperty() @PrimaryGeneratedColumn() readonly id: number;
  @ApiProperty() @Column() place: string;
  @ApiProperty() @Column() description: string;
  @ApiProperty() @Column() startDate: string;
  @ApiProperty() @Column() endDate: string;
}
