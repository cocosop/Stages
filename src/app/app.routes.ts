import { Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';
import { DashboardEtudiantComponent } from '../features/dashboard-etudiant/dashboard-etudiant.component';
import { StagesComponent } from '../features/stages/stages.component';
import { DashboardEntrepriseComponent } from '../features/dashboard-entreprise/dashboard-entreprise.component';
import { DashbEtudiantComponent } from './composants/dashb-etudiant/dashb-etudiant.component';
import { ProfilEtudiantComponent } from './composants/profil-etudiant/profil-etudiant.component';
import { DashboardComponent } from './composants/dashboard/dashboard.component';
import { CvComponent } from './composants/cv/cv.component';


export const routes: Routes = [
  

    {
        path: '',
        component: HomeComponent,
      },

      {
        path: 'stage',
        component: StagesComponent,
      },
      {
        path: 'espaceEudiant',
        component: DashboardEtudiantComponent,
        children: [
          { path: 'dashboard', component:DashboardComponent },
          { path: 'profilEtudiant', component: ProfilEtudiantComponent },
          { path: 'candidatures', component:DashbEtudiantComponent },
          { path: 'cv', component:CvComponent },
          { path: 'modifierMotdePasse', component: ProfilEtudiantComponent },
        ]
      },

      {
        path: 'espaceEmployeur',
        component: DashboardEntrepriseComponent,
      },

    
    
         
        
];
