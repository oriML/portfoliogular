import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-carousel',
  templateUrl: './tech-carousel.component.html',
  styleUrls: ['./tech-carousel.component.scss'],
  providers: []
})
export class TechCarouselComponent {

  private _techList: string[] = [];

  @Input() set techList(data: string[]) {
    this._techList = data;
  }

  get techList(){
    return this._techList;
  }


}
