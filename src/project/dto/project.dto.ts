import { ApiProperty } from '@nestjs/swagger';

export class ProjectDto {
  @ApiProperty() readonly name: string;
  @ApiProperty() readonly description: string;
  @ApiProperty() readonly deploy: string;
  @ApiProperty() readonly repo: string;
  @ApiProperty({ type: [Number] }) readonly technologies: number[];
}
