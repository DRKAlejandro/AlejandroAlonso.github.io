import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Skill } from '../../interfaces/card.model';
import { SharedModule } from '../../shared.module';
import { CommonModule } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../core/layout/layout.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  skills: Skill[] = [];
  languages: Skill[] = [];
  frameworks: Skill[] = [];
  areas: Skill[] = [];
  tools: Skill[] = [];

  constructor(private firestoreService: FirestoreService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.skills = await this.firestoreService.getData<Skill>('Skills');
      this.languages = this.skills.filter(skill => skill.type === 'Language');
      this.frameworks = this.skills.filter(skill => skill.type === 'Framework');
      this.areas = this.skills.filter(skill => skill.type === 'Area');
      this.tools = this.skills.filter(skill => skill.type === 'Tool');
    } catch (error) {
      console.error('Error al cargar los Skills:', error);
    }
  }

  ngAfterViewInit(): void {
    const carousels = document.querySelectorAll('.carousel');
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach((section) => {
      observer.observe(section);
    });


    carousels.forEach((carousel: any) => {
      new bootstrap.Carousel(carousel, {
        interval: 2000, 
        ride: 'carousel'
      });
    });
  }
}
