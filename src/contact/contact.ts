import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Contact {
  @ApiProperty() @PrimaryGeneratedColumn() readonly id: number;
  @ApiProperty() @Column({ unique: true }) name: string;
  @ApiProperty() @Column() link: string;
  @ApiProperty() @Column() icon: string;
}
