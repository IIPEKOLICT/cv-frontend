import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Field, Route } from '../shared/enums';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmploymentService } from './employment.service';
import { Observable } from 'rxjs';
import { Employment } from './employment';
import { EmploymentOperation } from '../shared/docs';
import { EmploymentDto } from './dto/employment.dto';

@ApiTags(Route.Employment)
@Controller(Route.Employment)
export class EmploymentController {
  constructor(private readonly employmentService: EmploymentService) {}

  @ApiOperation({ summary: EmploymentOperation.Get })
  @ApiResponse({ type: [Employment] })
  @Get()
  getAll(): Observable<Employment[]> {
    return this.employmentService.getAll();
  }

  @ApiOperation({ summary: EmploymentOperation.Create })
  @ApiResponse({ type: Employment })
  @Post()
  create(@Body() dto: EmploymentDto): Observable<Employment> {
    return this.employmentService.create(dto);
  }

  @ApiOperation({ summary: EmploymentOperation.Change })
  @ApiResponse({ type: Employment })
  @Put(`:${Field.Id}`)
  change(
    @Param(Field.Id) id: number,
    @Body() dto: EmploymentDto
  ): Observable<Employment> {
    return this.employmentService.change(id, dto);
  }

  @ApiOperation({ summary: EmploymentOperation.Delete })
  @ApiResponse({ type: Number })
  @Delete(`:${Field.Id}`)
  delete(@Param(Field.Id) id: number): Observable<number> {
    return this.employmentService.delete(id);
  }
}
