import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarcComponent } from '../../shared/navbarc/navbarc.component';
import { DashboardComponent } from '../../app/composants/dashboard/dashboard.component';

@Component({
  selector: 'app-dashboard-etudiant',
  standalone: true,
  imports: [CommonModule, NavbarcComponent,SidebarComponent,RouterModule,DashboardComponent],
  templateUrl: './dashboard-etudiant.component.html',
  styleUrl: './dashboard-etudiant.component.css'
})
export class DashboardEtudiantComponent {

}
