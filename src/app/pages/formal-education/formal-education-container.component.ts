
import { Component, inject } from '@angular/core';
import { RouteTitleService } from 'src/app/services/route-title.service';
import { educationList } from 'src/app/utils/constants';
import { IEducationModel } from '../models';

@Component({
  selector: 'app-formal-education',
  templateUrl: './formal-education-container.component.html',
  styleUrls: ['./formal-education-container.component.scss']
})
export class FormalEducationContainerComponent {
  routerTitleService: RouteTitleService = inject(RouteTitleService);

  constructor() {
    this.routerTitleService.title = 'Formal education';
    
  }
  get educationList() : IEducationModel[] {
    return educationList;
  }
}
