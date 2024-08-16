import { Component, Input } from '@angular/core';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LoginComponent } from '../../app/configSecurity/auth/login/login.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbarc',
  standalone: true,
  imports: [LoginComponent, CommonModule,RouterModule],
  templateUrl: './navbarc.component.html',
  styleUrl: './navbarc.component.css'
})
export class NavbarcComponent {

  @Input() backgroundColor: string = 'blue'
  loggedIn: boolean = false;
   pageColors = {
    '/': '#f0f0f0',
    '/espaceEtudiant': '#e0e0e0',

  };
  isHomePage: boolean = this.router.url === '/'; // Vérifiez l'URL actuelle pour la page d'accueil

  login() {
    // Implémenter la logique de connexion
    this.loggedIn = true;
  }

  logout() {
    // Implémenter la logique de déconnexion
    this.loggedIn = false;
  }

  constructor(private modalService: MdbModalService, private router: Router) {}

  openModal(): void {
    this.modalService.open(LoginComponent,
      
     );
  }

}
