import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent) },
      { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
      { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'contact', loadChildren: () => import('./modules/experience/experience.module').then(m => m.ExperienceModule) },
    ],
  },
];
