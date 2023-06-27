import { Component, Input } from '@angular/core';
import { ITimeLineModel } from 'src/app/pages/models';

@Component({
  selector: 'app-experience-timeline',
  templateUrl: './experience-timeline.component.html',
  styleUrls: ['./experience-timeline.component.scss']
})
export class ExperienceTimelineComponent {
  @Input() timeLines: ITimeLineModel[] = [];
}
