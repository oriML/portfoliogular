import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeModule } from './about-me/about-me.module';
import { FormalEducationComponent } from './formal-education/formal-education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    FormalEducationComponent,
    ExperienceComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    AboutMeModule
  ]
})
export class PagesModule { }
