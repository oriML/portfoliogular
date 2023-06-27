import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import { ExperienceContainerComponent } from './experience-container.component';
import { ExperienceTimelineComponent } from './components/experience-timeline/experience-timeline.component';



@NgModule({
  declarations: [
    ExperienceContainerComponent,
    ExperienceTimelineComponent,
  ],
  imports: [
    CommonModule,
    TimelineModule,
    CardModule
  ]
})
export class ExperienceModule { }
