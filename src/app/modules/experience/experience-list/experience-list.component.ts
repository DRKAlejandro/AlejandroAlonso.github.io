import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FirestoreService } from '../../../services/firestore.service';
import { Experience } from '../../../interfaces/card.model';
import { SharedModule } from '../../../shared.module';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css', '../../../core/layout/layout.component.css']
})
export class ExperienceListComponent implements OnInit, AfterViewInit {
  experiences: Experience[] = [];

  constructor(private firestoreService: FirestoreService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.experiences = await this.firestoreService.getData<Experience>('Experience');
    } catch (error) {
      console.error('Error al cargar los Experiences:', error);
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
