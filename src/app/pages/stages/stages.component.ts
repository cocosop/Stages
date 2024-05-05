import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NavBarComponent } from '../../composants/nav-bar/nav-bar.component';

@Component({
  selector: 'app-stages',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink,NavBarComponent],
  templateUrl: './stages.component.html',
  styleUrl: './stages.component.css'
})
export class StagesComponent {

}
