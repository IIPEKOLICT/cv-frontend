import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Technology {
  @ApiProperty() @PrimaryGeneratedColumn() readonly id: number;
  @ApiProperty() @Column({ unique: true }) name: string;
  @ApiProperty() @Column() icon: string;
}
