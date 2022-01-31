import { ApiProperty } from '@nestjs/swagger';

export class PostContactDto {
  @ApiProperty() readonly name: string;
  @ApiProperty() readonly link: string;
}
