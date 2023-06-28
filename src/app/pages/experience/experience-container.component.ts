
import { Component, inject } from '@angular/core';
import { RouteTitleService } from 'src/app/services/route-title.service';
import { experienceList } from 'src/app/utils/constants';

@Component({
  selector: 'app-experience',
  templateUrl: './experience-container.component.html',
  styleUrls: ['./experience-container.component.scss']
})
export class ExperienceContainerComponent {

  routerTitleService: RouteTitleService = inject(RouteTitleService);

  constructor() {
    this.routerTitleService.title = 'Experience';
  }

 get experienceList() {
  return experienceList;
 }

}
