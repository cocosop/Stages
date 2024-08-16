import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbEtudiantComponent } from './dashb-etudiant.component';

describe('DashbEtudiantComponent', () => {
  let component: DashbEtudiantComponent;
  let fixture: ComponentFixture<DashbEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbEtudiantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
