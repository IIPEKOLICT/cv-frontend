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
import { ContactCardComponent } from './contacts-page/contact-card/contact-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';

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
    TechologiesPageComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
