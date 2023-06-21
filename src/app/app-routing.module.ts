import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { FormalEducationComponent } from './pages/formal-education/formal-education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about-me'
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'formal-education',
    component: FormalEducationComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'contact-me',
    component: ContactMeComponent
  },
  {
    path: '**',
    redirectTo: 'about-me'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
