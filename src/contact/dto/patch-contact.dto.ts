import { ApiProperty } from '@nestjs/swagger';

export class PatchContactDto {
  @ApiProperty() readonly id: number;
  @ApiProperty() readonly name: string;
  @ApiProperty() readonly link: string;
}
