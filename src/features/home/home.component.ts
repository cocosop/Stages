import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from '../../app/configSecurity/auth/login/login.component';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarcComponent } from '../../shared/navbarc/navbarc.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavBarComponent,
    FooterComponent,
    FontAwesomeModule,
    LoginComponent,
    RouterLinkActive,
    NavBarComponent,
    NavbarcComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private modalService: MdbModalService) {}

  openModal(): void {
    this.modalService.open(LoginComponent,
      
      
     );
  }

}
