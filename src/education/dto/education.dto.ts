import { ApiProperty } from '@nestjs/swagger';

export class EducationDto {
  @ApiProperty() readonly place: string;
  @ApiProperty() readonly speciality: string;
  @ApiProperty() readonly startDate: string;
  @ApiProperty() readonly endDate: string;
}
