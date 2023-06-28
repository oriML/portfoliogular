import { Component, inject } from '@angular/core';
import { RouteTitleService } from 'src/app/services/route-title.service';
import { interactionPageMessages } from 'src/app/utils/constants';

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

  get interactionPageMessages() {
    return interactionPageMessages;
  }

  get pageMessage() {
    return interactionPageMessages['contact-me'].main;
  }
}
