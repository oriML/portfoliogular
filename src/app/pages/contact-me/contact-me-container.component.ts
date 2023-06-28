import { Component, inject } from '@angular/core';
import { RouteTitleService } from 'src/app/services/route-title.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me-container.component.html',
  styleUrls: ['./contact-me-container.component.scss']
})
export class ContactMeContainerComponent {
  routerTitleService: RouteTitleService = inject(RouteTitleService);
  constructor() {
    this.routerTitleService.title = 'Contact me';
  }
}
