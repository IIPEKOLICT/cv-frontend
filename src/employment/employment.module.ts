import { Module } from '@nestjs/common';
import { EmploymentController } from './employment.controller';
import { EmploymentService } from './employment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employment } from './employment';

@Module({
  imports: [TypeOrmModule.forFeature([Employment])],
  controllers: [EmploymentController],
  providers: [EmploymentService]
})
export class EmploymentModule {}
