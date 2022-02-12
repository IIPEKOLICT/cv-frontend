import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { TechnologyPageComponent } from './technology-page/technology-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { EndPoint } from './shared/enums';

const routes: Routes = [
  {
    path: EndPoint.Auth,
    component: AuthPageComponent
  },
  {
    path: EndPoint.Technology,
    component: TechnologyPageComponent
  },
  {
    path: EndPoint.Project,
    component: ProjectPageComponent
  },
  {
    path: '**',
    component: AuthPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
