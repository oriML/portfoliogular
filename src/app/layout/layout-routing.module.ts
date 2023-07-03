import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from 'src/app/pages/about-me/about-me-container.component';
import { ContactMeContainerComponent } from 'src/app/pages/contact-me/contact-me-container.component';
import { ExperienceContainerComponent } from 'src/app/pages/experience/experience-container.component';
import { FormalEducationContainerComponent } from 'src/app/pages/formal-education/formal-education-container.component';

const routes: Routes = [
  {path: '', redirectTo: 'about-me', pathMatch: 'full'},

  {
    path: '',
    loadChildren: () => import('../pages/about-me/about-me.module').then(m => m.AboutMeModule),
  },
  {
    path: '',
    loadChildren: () => import('../pages/formal-education/formal-education.module').then(m => m.FormalEducationModule),
  },
  {
    path: '',
    loadChildren: () => import('../pages/experience/experience.module').then(m => m.ExperienceModule),

  },
  {
    path: '',
    loadChildren: () => import('../pages/contact-me/contact-me.module').then(m => m.ContactMeModule),
  },
  {path: '**', redirectTo: 'about-me'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingRoutingModule { }
