import { IRoute } from './interfaces';
import { EndPoint } from './enums';

export const authRoutes: IRoute[] = [
  {
    title: 'Technologies',
    endPoint: EndPoint.Technology
  },
  {
    title: 'Projects',
    endPoint: EndPoint.Project
  }
]
