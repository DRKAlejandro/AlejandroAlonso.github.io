import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
import { Project } from '../../../interfaces/card.model';
import { SharedModule } from '../../../shared.module';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css', '../../../core/layout/layout.component.css']
})
export class ProjectListComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];

  constructor(private firestoreService: FirestoreService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.projects = await this.firestoreService.getData<Project>('Projects');
    } catch (error) {
      console.error('Error al cargar los Projects:', error);
    }
  }

  ngAfterViewInit(): void {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach((carousel: any) => {
      new bootstrap.Carousel(carousel, {
        interval: 2000, 
        ride: 'carousel'
      });
    });
  }
}
