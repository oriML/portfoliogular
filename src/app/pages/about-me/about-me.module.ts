import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me-container.component';
import { DetailsComponent } from './components/details/details.component';
import { TechCarouselComponent } from './components/tech-carousel/tech-carousel.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    AboutMeComponent,
    DetailsComponent,
    TechCarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class AboutMeModule { }
