import { Component, inject } from '@angular/core';
import { RouteTitleService } from 'src/app/services/route-title.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  routerTitleService: RouteTitleService = inject(RouteTitleService);
    
  constructor() {

  }

  get title() {
    return this.routerTitleService.title;
  }

}
