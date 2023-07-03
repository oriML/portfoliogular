import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeContainerComponent } from './contact-me-container.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgOptimizedImage } from '@angular/common';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component'
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContactMeContainerComponent,
    ContactFormComponent,
    ContactDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '', component: ContactMeContainerComponent
      }
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    NgOptimizedImage,
    CardModule
  ]
})
export class ContactMeModule { }
