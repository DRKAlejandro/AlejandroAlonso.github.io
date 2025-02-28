import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';  // Rutas del módulo
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule, 
    ProjectListComponent,  
    ProjectDetailComponent 
  ]
})
export class ProjectsModule { }
