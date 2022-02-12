import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { MenuComponent } from './menu/menu.component';
import { AuthInterceptorProvider } from '../shared/providers';
import { EmploymentsPageComponent } from './employments-page/employments-page.component';
import { EducationsPageComponent } from './educations-page/educations-page.component';
import { CvsPageComponent } from './cvs-page/cvs-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { TechologiesPageComponent } from './techologies-page/techologies-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    MenuComponent,
    EmploymentsPageComponent,
    EducationsPageComponent,
    CvsPageComponent,
    ContactsPageComponent,
    ProjectsPageComponent,
    TechologiesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
