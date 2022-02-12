import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { MenuComponent } from './menu/menu.component';
import { TechnologyPageComponent } from './technology-page/technology-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { AuthInterceptorProvider } from './shared/providers';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    MenuComponent,
    TechnologyPageComponent,
    ProjectPageComponent
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
