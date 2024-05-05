import { Component } from '@angular/core';
import {RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { DashboardEtudiantComponent } from '../../../pages/dashboard-etudiant/dashboard-etudiant.component';
import { StagesComponent } from '../../../pages/stages/stages.component';

@Component({
  selector: 'app-signup-etudiant',
  standalone: true,
  imports: [DashboardEtudiantComponent,RouterLinkActive, RouterLink,StagesComponent],
  templateUrl: './signup-etudiant.component.html',
  styleUrl: './signup-etudiant.component.css'
})
export class SignupEtudiantComponent {

}
