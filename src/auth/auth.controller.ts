import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Route } from '../shared/enums';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './dto/auth.dto';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Auth } from './auth.decorator';
import { AuthGuard } from './auth.guard';
import { AuthOperation } from '../shared/docs';

@ApiTags(Route.Auth)
@Controller(Route.Auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: AuthOperation.Auth })
  @ApiResponse({ type: String })
  @Auth()
  @UseGuards(AuthGuard)
  @Get()
  auth(): Observable<string> {
    return this.authService.auth();
  }

  @ApiOperation({ summary: AuthOperation.Login })
  @ApiResponse({ type: String })
  @Post()
  login(@Body() dto: AuthDto): Observable<string> {
    return this.authService.login(dto);
  }
}
