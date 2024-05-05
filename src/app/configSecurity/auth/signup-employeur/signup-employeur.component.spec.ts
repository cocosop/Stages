import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupEmployeurComponent } from './signup-employeur.component';

describe('SignupEmployeurComponent', () => {
  let component: SignupEmployeurComponent;
  let fixture: ComponentFixture<SignupEmployeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupEmployeurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupEmployeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
