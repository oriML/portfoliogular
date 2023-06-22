import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { FormalEducationComponent } from './formal-education/formal-education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactMeComponent } from './contact-me/contact-me.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    FormalEducationComponent,
    ExperienceComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
