import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../../../services/firestore.service';
import { Project, Skill } from '../../../interfaces/card.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {
  project: Project | null = null;
  expandedImageIndex: number | null = null;
  isImageVisible: boolean = false;
  skills: Skill[] = [];

  constructor(
    private route: ActivatedRoute,
    private firestoreService: FirestoreService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.route.paramMap.subscribe(async params => {
        const id = params.get('id');
        if (id) {
          const project = await this.firestoreService.getDocumentById<Project>('Projects', id);
          if (project) {
            this.project = project;
            if (project.technologies) {
              this.skills = await this.firestoreService.getDocumentsByIds<Skill>('Skills', project.technologies);
            }
          } else {
            console.error('Project not found!');
          }
        }
      });
    } catch (error) {
      console.error('Error al cargar los Projects:', error);
    }
  }

  hasImages(): boolean {
    return this.project !== null && this.project.images !== undefined && this.project.images.length > 0;
  }

  nextImage(): void {
    if (this.project?.images && this.expandedImageIndex !== null) {
      this.expandedImageIndex = (this.expandedImageIndex + 1) % this.project.images.length;
    }
  }

  prevImage(): void {
    if (this.project?.images && this.expandedImageIndex !== null) {
      this.expandedImageIndex = (this.expandedImageIndex - 1 + this.project.images.length) % this.project.images.length;
    }
  }

  expandImage(index: number): void {
    if (this.project?.images?.length) {
      this.expandedImageIndex = index;
      setTimeout(() => {
        this.isImageVisible = true;
      }, 10);
    }
  }

  closeImage(): void {
    this.isImageVisible = false;
    setTimeout(() => {
      this.expandedImageIndex = null;
    }, 300);
  }
}
