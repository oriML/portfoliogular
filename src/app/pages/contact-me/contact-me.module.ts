import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeContainerComponent } from './contact-me-container.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgOptimizedImage } from '@angular/common'



@NgModule({
  declarations: [
    ContactMeContainerComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    NgOptimizedImage
  ]
})
export class ContactMeModule { }
