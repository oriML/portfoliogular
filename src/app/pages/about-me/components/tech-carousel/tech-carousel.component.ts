import { Component, Input } from '@angular/core';
import { ITechListModel } from 'src/app/pages/models';

@Component({
  selector: 'app-tech-carousel',
  templateUrl: './tech-carousel.component.html',
  styleUrls: ['./tech-carousel.component.scss'],
  providers: []
})
export class TechCarouselComponent {

  private _techList: ITechListModel[] = [];

  @Input() set techList(data: ITechListModel[]) {
    this._techList = ([...data]).reverse();
  }

  get techList(){
    return this._techList;
  }

}
