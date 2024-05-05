import { Component } from '@angular/core';
import { NavBarComponent } from '../../composants/nav-bar/nav-bar.component';
import { FooterComponent } from '../../composants/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from '../../configSecurity/auth/login/login.component';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent,
    FontAwesomeModule,
    LoginComponent,
    RouterLinkActive,
    NavBarComponent,
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
