import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter,faLinkedin, faGithub,faInstagram,faTiktok ,faGoogle} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faS } from '@fortawesome/free-solid-svg-icons';

library.add(faS);



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FontAwesomeModule,
    
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faLinkedin=faLinkedin;
  faGithub=faGithub;
  faGoogle=faGoogle;

}
