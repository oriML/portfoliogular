import { Component } from '@angular/core';
import { educationList } from 'src/app/utils/constants';
import { IEducationModel } from '../models';

@Component({
  selector: 'app-formal-education',
  templateUrl: './formal-education-container.component.html',
  styleUrls: ['./formal-education-container.component.scss']
})
export class FormalEducationContainerComponent {

  get educationList() : IEducationModel[] {
    return educationList;
  }
}
