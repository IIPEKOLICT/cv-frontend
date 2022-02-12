import { IRoute } from './interfaces';
import { EndPoint } from './enums';

export const authRoutes: IRoute[] = [
  {
    title: 'Authorization',
    endPoint: EndPoint.Auth
  },
  {
    title: 'Contacts',
    endPoint: EndPoint.Contacts
  },
  {
    title: 'Cvs',
    endPoint: EndPoint.Cvs
  },
  {
    title: 'Educations',
    endPoint: EndPoint.Educations
  },
  {
    title: 'Employments',
    endPoint: EndPoint.Employments
  },
  {
    title: 'Projects',
    endPoint: EndPoint.Projects
  },
  {
    title: 'Technologies',
    endPoint: EndPoint.Technologies
  },
]
