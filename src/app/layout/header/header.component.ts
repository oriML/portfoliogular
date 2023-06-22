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
      route: 'about-me',
      icon: 'bx bxs-user-detail bx-tada-hover'
    },
    {
      active: true,
      label: 'Formal education',
      route: 'formal-education',
      icon: 'bx bxs-book-reader bx-tada-hover'
    },
    {
      active: true,
      label: 'Experience',
      route: 'experience',
      icon: 'bx bxs-shopping-bag bx-tada-hover'
    },
    {
      active: true,
      label: 'Contact me!',
      route: 'contact-me',
      icon: 'bx bxs-paper-plane bx-tada-hover'
    },
  ]

}
