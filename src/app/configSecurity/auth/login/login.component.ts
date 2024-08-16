import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { NavBarComponent } from '../../../../shared/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { MdbTabsModule,  } from "mdb-angular-ui-kit/tabs";
import { SignupEmployeurComponent } from '../signup-employeur/signup-employeur.component';
import { SignupEtudiantComponent } from '../signup-etudiant/signup-etudiant.component';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MdbTabsModule,SignupEmployeurComponent,SignupEtudiantComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSignDivVisiable: boolean  = true;

  constructor(private modalRef: MdbModalRef<LoginComponent>, private modalService: MdbModalService) {}




  

  closeModal(): void {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }
}
