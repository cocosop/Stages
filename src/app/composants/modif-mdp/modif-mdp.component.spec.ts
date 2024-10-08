import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMdpComponent } from './modif-mdp.component';

describe('ModifMdpComponent', () => {
  let component: ModifMdpComponent;
  let fixture: ComponentFixture<ModifMdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifMdpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifMdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
