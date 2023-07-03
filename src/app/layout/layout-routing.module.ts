import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'about-me', pathMatch: 'full'},
  {
    path: 'about-me',
    loadChildren: () => import('../pages/about-me/about-me.module').then(m => m.AboutMeModule),
  },
  {
    path: 'formal-education',
    loadChildren: () => import('../pages/formal-education/formal-education.module').then(m => m.FormalEducationModule),
  },
  {
    path: 'experience',
    loadChildren: () => import('../pages/experience/experience.module').then(m => m.ExperienceModule),
  },
  {
    path: 'contact-me',
    loadChildren: () => import('../pages/contact-me/contact-me.module').then(m => m.ContactMeModule),
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
