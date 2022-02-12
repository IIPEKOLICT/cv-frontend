import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { EndPoint } from '../shared/enums';
import { TechologiesPageComponent } from './techologies-page/techologies-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { CvsPageComponent } from './cvs-page/cvs-page.component';
import { EducationsPageComponent } from './educations-page/educations-page.component';
import { EmploymentsPageComponent } from './employments-page/employments-page.component';

const routes: Routes = [
  {
    path: EndPoint.Auth,
    component: AuthPageComponent
  },
  {
    path: EndPoint.Contacts,
    component: ContactsPageComponent
  },
  {
    path: EndPoint.Cvs,
    component: CvsPageComponent
  },
  {
    path: EndPoint.Educations,
    component: EducationsPageComponent
  },
  {
    path: EndPoint.Employments,
    component: EmploymentsPageComponent
  },
  {
    path: EndPoint.Projects,
    component: ProjectsPageComponent
  },
  {
    path: EndPoint.Technologies,
    component: TechologiesPageComponent
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
