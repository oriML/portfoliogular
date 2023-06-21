import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-angular';
  active = 1;
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
