import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeModule } from './about-me/about-me.module';
import { FormalEducationComponent } from './formal-education/formal-education.component';
import { ContactMeModule } from './contact-me/contact-me.module';
import { ExperienceModule } from './experience/experience.module';

@NgModule({
  declarations: [
    FormalEducationComponent
  ],
  imports: [
    CommonModule,
    AboutMeModule,
    ContactMeModule,
    ExperienceModule
  ]
})
export class PagesModule { }
