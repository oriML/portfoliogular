import { Component } from '@angular/core';
import { experienceList } from 'src/app/utils/constants';

@Component({
  selector: 'app-experience',
  templateUrl: './experience-container.component.html',
  styleUrls: ['./experience-container.component.scss']
})
export class ExperienceContainerComponent {
  
 get experienceList() {
  return experienceList;
 }

}
