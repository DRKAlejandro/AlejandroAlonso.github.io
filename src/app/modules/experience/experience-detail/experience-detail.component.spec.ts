import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailComponent } from './experience-detail.component';

describe('ExperienceDetailComponent', () => {
  let component: ExperienceDetailComponent;
  let fixture: ComponentFixture<ExperienceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
