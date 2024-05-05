import { Component } from '@angular/core';
import { LoginComponent } from '../../configSecurity/auth/login/login.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [LoginComponent,MdbModalModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private modalService: MdbModalService) {}

  openModal(): void {
    this.modalService.open(LoginComponent,
      
     );
  }

}
