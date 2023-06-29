import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me-container.component';
import { DetailsComponent } from './components/details/details.component';
import { TechCarouselComponent } from './components/tech-carousel/tech-carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { ProgressBarModule } from 'primeng/progressbar';
import { SkillsTableComponent } from './components/skills-table/skills-table.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AboutMeComponent,
    DetailsComponent,
    TechCarouselComponent,
    SkillsTableComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ProgressBarModule,
    CardModule,
  ]
})
export class AboutMeModule { }
