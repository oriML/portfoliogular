import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  @Input() iMessage: string = '';
  details: {title: string; content: string; icon: string;}[] = [
    {
      title: 'Location',
      content:'Ashqelon, Israel',
      icon: 'bxs-map'
    },
    {
      title: 'Email',
      content:'orimenachemlevi@gmail.com',
      icon: 'bxl-gmail'
    },
    {
      title: 'Mobile',
      content:'+972506436143',
      icon: 'bxs-phone-call'
    }
  ];
}
