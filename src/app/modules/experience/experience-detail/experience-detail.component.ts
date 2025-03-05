import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../../../services/firestore.service';
import { Experience, Project } from '../../../interfaces/card.model';
import { SharedModule } from '../../../shared.module';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css', '../../projects/project-detail/project-detail.component.css', '../../../core/layout/layout.component.css']
})

export class ExperienceDetailComponent implements OnInit {
  experience: Experience | null = null;
  projects: Project[] = [];
  showMoreInfo: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.projects = await this.firestoreService.getData<Project>('Projects');
      this.route.paramMap.subscribe(async params => {
        const id = params.get('id');
        if (id) {
          const experience = await this.firestoreService.getDocumentById<Experience>('Experience', id);
          if (experience) {
            this.experience = experience;
            if (experience.projects) {
              this.projects = await this.firestoreService.getDocumentsByIds<Project>('Projects', experience.projects);
            }
          } else {
            console.error('Experience not found!');
          }
        }
      });
    } catch (error) {
      console.error('Error al cargar los experiences:', error);
    }
  }

  toggleMoreInfo(): void {
    this.showMoreInfo = !this.showMoreInfo;
  }

  toDate(value: any): Date | null {
    return value instanceof Timestamp ? value.toDate() : null;
  }
  formatDate(value: any): string {
    if (!value) {
      return 'Present'; 
    }
    const date = this.toDate(value);
    return date ? date.toLocaleDateString('en-GB', { month: '2-digit', year: 'numeric' }) : 'Invalid date';
  }
}
