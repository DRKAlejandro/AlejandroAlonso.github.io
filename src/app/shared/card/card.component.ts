import { Component, Input } from '@angular/core';
import { Skill, Project, Experience } from '../../interfaces/card.model';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() dataSkill!: Skill;
  @Input() dataProject!: Project;
  @Input() dataExperience!: Experience;

  // Método para convertir el timestamp a Date
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
