import { ApiProperty } from '@nestjs/swagger';

export class EmploymentDto {
  @ApiProperty() readonly place: string;
  @ApiProperty() readonly description: string;
  @ApiProperty() readonly startDate: string;
  @ApiProperty() readonly endDate: string;
}
