import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from 'src/app/pages/about-me/about-me-container.component';
import { ContactMeContainerComponent } from 'src/app/pages/contact-me/contact-me-container.component';
import { ExperienceContainerComponent } from 'src/app/pages/experience/experience-container.component';
import { FormalEducationContainerComponent } from 'src/app/pages/formal-education/formal-education-container.component';

const routes: Routes = [
  {path: '', redirectTo: 'about-me', pathMatch: 'full'},
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'formal-education',
    component: FormalEducationContainerComponent
  },
  {
    path: 'experience',
    component: ExperienceContainerComponent
  },
  {
    path: 'contact-me',
    component: ContactMeContainerComponent
  },
  {
    path: '**',
    redirectTo: 'about-me'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingRoutingModule { }
