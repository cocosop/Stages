import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { DashboardEntrepriseComponent } from '../features/dashboard-entreprise/dashboard-entreprise.component';
import { DashboardEtudiantComponent } from '../features/dashboard-etudiant/dashboard-etudiant.component';
import { StagesComponent } from '../features/stages/stages.component';
import { SharedModuleModule } from '../shared/shared-module/shared-module.module';
import { DashboardComponent } from './composants/dashboard/dashboard.component';
import { DashbEtudiantComponent } from './composants/dashb-etudiant/dashb-etudiant.component';
import { CvComponent } from './composants/cv/cv.component';
import { CandidaturesComponent } from './composants/candidatures/candidatures.component';
import { ProfilEtudiantComponent } from './composants/profil-etudiant/profil-etudiant.component';
import { ModifMdpComponent } from './composants/modif-mdp/modif-mdp.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,        
    MdbCheckboxModule,
    DashboardEntrepriseComponent,
    DashboardEtudiantComponent,
    StagesComponent,
    DashboardComponent,
    SharedModuleModule,
    DashbEtudiantComponent,
    CvComponent,
    CandidaturesComponent,
    ProfilEtudiantComponent,
    ModifMdpComponent,
    DashboardComponent
    
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Stage';
}
