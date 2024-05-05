import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterModule,  } from '@angular/router';
import { NavBarComponent } from '../../composants/nav-bar/nav-bar.component';


@Component({
  selector: 'app-dashboard-entreprise',
  standalone: true,
  imports: [ CommonModule, NavBarComponent],
  templateUrl: './dashboard-entreprise.component.html',
  styleUrl: './dashboard-entreprise.component.css'
})

export class DashboardEntrepriseComponent {

}
