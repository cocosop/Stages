import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterModule,  } from '@angular/router';
import { NavBarComponent } from '../../composants/nav-bar/nav-bar.component';

@Component({
  selector: 'app-dashboard-etudiant',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './dashboard-etudiant.component.html',
  styleUrl: './dashboard-etudiant.component.css'
})
export class DashboardEtudiantComponent {

}
