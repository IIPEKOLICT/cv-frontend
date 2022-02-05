import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty() readonly login: string;
  @ApiProperty() readonly password: string;
}
