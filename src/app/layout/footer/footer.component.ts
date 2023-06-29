import { Component } from '@angular/core';
import { contactLinks } from 'src/app/utils/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  get contactLinks() {
    return contactLinks;
   }
  
   get in() {
    return contactLinks['in'];
   }
  
   get github(){
    return contactLinks['github'];
   }
  
   get mail(){
    return contactLinks['mail'];
   }
  
   get whatsapp() {
    return contactLinks['whatsapp'];
   }
}
