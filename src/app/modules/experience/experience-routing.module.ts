import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';

const routes: Routes = [
  { path: '', component: ExperienceListComponent }, 
  { path: ':id', component: ExperienceDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
