import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardEtudiantComponent } from './pages/dashboard-etudiant/dashboard-etudiant.component';
import { StagesComponent } from './pages/stages/stages.component';
import { DashboardEntrepriseComponent } from './pages/dashboard-entreprise/dashboard-entreprise.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
      },

      {
        path: 'espaceEudiant',
        component: DashboardEtudiantComponent,
      },

      {
        path: 'espaceEmployeur',
        component: DashboardEntrepriseComponent,
      },

      {
        path: 'stage',
        component: StagesComponent,
      },
];
