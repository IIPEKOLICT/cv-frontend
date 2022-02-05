import { Module } from '@nestjs/common';
import { EmploymentController } from './employment.controller';
import { EmploymentService } from './employment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employment } from './employment';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Employment]), AuthModule],
  controllers: [EmploymentController],
  providers: [EmploymentService],
})
export class EmploymentModule {}
