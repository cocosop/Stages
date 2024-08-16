import { Component } from '@angular/core';
import { RouterLink, RouterModule, Routes,RouterLinkActive } from '@angular/router';
import { DashboardEntrepriseComponent } from '../../../../features/dashboard-entreprise/dashboard-entreprise.component';

@Component({
  selector: 'app-signup-employeur',
  standalone: true,
  imports: [DashboardEntrepriseComponent,  RouterLinkActive, RouterLink],
  templateUrl: './signup-employeur.component.html',
  styleUrl: './signup-employeur.component.css'
})
export class SignupEmployeurComponent {

}
