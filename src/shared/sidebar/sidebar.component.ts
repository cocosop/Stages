import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { DashbEtudiantComponent } from '../../app/composants/dashb-etudiant/dashb-etudiant.component';
import { CandidaturesComponent } from '../../app/composants/candidatures/candidatures.component';
import { ProfilEtudiantComponent } from '../../app/composants/profil-etudiant/profil-etudiant.component';
import { CvComponent } from '../../app/composants/cv/cv.component';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,
    MatIconModule, RouterLink, DashbEtudiantComponent, CandidaturesComponent, ProfilEtudiantComponent, CvComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarVisible = true;
  isSubmenuOpen = false;
  isDashboardSelected = false;


  constructor() { }

  private sidebarVisibilitySubject = new BehaviorSubject<boolean>(true);
  sidebarVisibility$ = this.sidebarVisibilitySubject.asObservable();

  toggleSidebaro() {
    this.sidebarVisibilitySubject.next(!this.sidebarVisibilitySubject.value);
  }
  ngOnInit() {
    this.sidebarVisibility$.subscribe((isVisible) => {
      console.log(isVisible)
      this.isSidebarVisible = isVisible;
    });
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    this.toggleSidebaro(); // Toggle sidebar state
  }


  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }


  selectDashboard() {
    this.isDashboardSelected = true;
  }

}
