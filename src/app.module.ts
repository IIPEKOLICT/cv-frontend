import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dbConfig } from './configs/db.config';
import { staticConfig } from './configs/static.config';
import { ContactModule } from './contact/contact.module';
import { FileModule } from './file/file.module';
import { TechnologyModule } from './technology/technology.module';
import { ProjectModule } from './project/project.module';
import { EducationModule } from './education/education.module';
import { EmploymentModule } from './employment/employment.module';
import { CvModule } from './cv/cv.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot(staticConfig),
    TypeOrmModule.forRoot(dbConfig),
    ContactModule,
    FileModule,
    TechnologyModule,
    ProjectModule,
    EducationModule,
    EmploymentModule,
    CvModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
