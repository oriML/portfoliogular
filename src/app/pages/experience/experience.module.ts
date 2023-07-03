import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import { ExperienceContainerComponent } from './experience-container.component';
import { ExperienceTimelineComponent } from './components/experience-timeline/experience-timeline.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ExperienceContainerComponent,
    ExperienceTimelineComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'experience', component: ExperienceContainerComponent
      }
    ]),
    CommonModule,
    TimelineModule,
    CardModule
  ]
})
export class ExperienceModule { }
