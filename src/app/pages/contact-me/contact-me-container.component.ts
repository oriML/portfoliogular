import { Component, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RouteTitleService } from 'src/app/services/route-title.service';
import { interactionPageMessages } from 'src/app/utils/constants';
import { IContactFormModel } from '../models';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me-container.component.html',
  styleUrls: ['./contact-me-container.component.scss']
})
export class ContactMeContainerComponent {
  routerTitleService: RouteTitleService = inject(RouteTitleService);
  apiService: ApiService = inject(ApiService);

  constructor() {
    this.routerTitleService.title = 'Contact me';
  }

  get interactionPageMessages() {
    return interactionPageMessages;
  }

  get pageMessage() {
    return interactionPageMessages['contact-me'].main;
  }

  get isSubmitted$() {
  return this.apiService.isSubmitted;
  }

  submit(form: IContactFormModel) {
    this.apiService.sendForm(form);
  }

}
