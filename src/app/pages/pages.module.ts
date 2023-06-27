import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeModule } from './about-me/about-me.module';
import { ContactMeModule } from './contact-me/contact-me.module';
import { ExperienceModule } from './experience/experience.module';
import { FormalEducationModule } from './formal-education/formal-education.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutMeModule,
    ContactMeModule,
    ExperienceModule,
    FormalEducationModule
  ]
})
export class PagesModule { }
