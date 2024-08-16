import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil-etudiant',
  standalone: true,
  imports: [CommonModule, FormsModule,NgSelectModule],
  templateUrl: './profil-etudiant.component.html',
  styleUrl: './profil-etudiant.component.css'
})
export class ProfilEtudiantComponent {

}
