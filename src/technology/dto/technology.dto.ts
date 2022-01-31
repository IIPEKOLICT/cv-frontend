import { ApiProperty } from '@nestjs/swagger';

export class TechnologyDto {
  @ApiProperty() readonly name: string;
}
