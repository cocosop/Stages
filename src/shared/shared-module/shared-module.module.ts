import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { LoginComponent } from '../../app/configSecurity/auth/login/login.component';
import { NavbarcComponent } from '../navbarc/navbarc.component';
import { SidebarComponent } from '../sidebar/sidebar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    NavBarComponent,
    LoginComponent,
    MdbModalModule,
    NavbarcComponent,
    SidebarComponent

  ]
})
export class SharedModuleModule { }
