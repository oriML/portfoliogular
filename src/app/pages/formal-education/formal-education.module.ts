import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormalEducationListComponent } from './formal-education-list/formal-education-list.component';
import { FormalEducationContainerComponent } from './formal-education-container.component';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FormalEducationContainerComponent,
    FormalEducationListComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '', component: FormalEducationContainerComponent
      }
    ]),
    CommonModule,
    TimelineModule,
    CardModule
  ]
})
export class FormalEducationModule { }
