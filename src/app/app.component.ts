import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { DashboardEntrepriseComponent } from './pages/dashboard-entreprise/dashboard-entreprise.component';
import { DashboardEtudiantComponent } from './pages/dashboard-etudiant/dashboard-etudiant.component';
import { StagesComponent } from './pages/stages/stages.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    NavBarComponent,
    MdbCheckboxModule,
    DashboardEntrepriseComponent,
    DashboardEtudiantComponent,
    StagesComponent,
    
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Stage';
}
