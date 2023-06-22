import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuLinks = [
    {
      active: true,
      label: 'About me',
      route: 'about-me'
    },
    {
      active: true,
      label: 'Formal education',
      route: 'formal-education'
    },
    {
      active: true,
      label: 'Experience',
      route: 'experience'
    },
    {
      active: true,
      label: 'Contact me!',
      route: 'contact-me'
    },
  ]

}
