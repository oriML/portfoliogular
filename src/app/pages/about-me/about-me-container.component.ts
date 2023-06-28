import { Component, inject } from '@angular/core';
import { RouteTitleService } from 'src/app/services/route-title.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me-container.component.html',
  styleUrls: ['./about-me-container.component.scss']
})
export class AboutMeComponent {
  routerTitleService: RouteTitleService = inject(RouteTitleService);
  constructor() {
    this.routerTitleService.title = 'About Me'; 
  }

}
