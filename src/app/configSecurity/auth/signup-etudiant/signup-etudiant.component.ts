import { Component } from '@angular/core';
import {RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { DashboardEtudiantComponent } from '../../../../features/dashboard-etudiant/dashboard-etudiant.component';
import { StagesComponent } from '../../../../features/stages/stages.component';

@Component({
  selector: 'app-signup-etudiant',
  standalone: true,
  imports: [DashboardEtudiantComponent,RouterLinkActive, RouterLink,StagesComponent],
  templateUrl: './signup-etudiant.component.html',
  styleUrl: './signup-etudiant.component.css'
})
export class SignupEtudiantComponent {
  
}
