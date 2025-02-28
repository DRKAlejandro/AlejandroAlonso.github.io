import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceRoutingModule } from './experience-routing.module'; 
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule, 
    ExperienceListComponent,  
    ExperienceDetailComponent 
  ]
})
export class ExperiencesModule { }
