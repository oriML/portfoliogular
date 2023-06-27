import { Component, Input } from '@angular/core';
import { IEducationModel } from '../../models';

@Component({
  selector: 'app-formal-education-list',
  templateUrl: './formal-education-list.component.html',
  styleUrls: ['./formal-education-list.component.scss']
})
export class FormalEducationListComponent {

  private _timeLines: IEducationModel[] = [];
  private _listIcons: {src?: string; alt?: string;}[] = [];

  @Input() set timeLines(data: IEducationModel[]){
    this._timeLines = data;
    this._listIcons = this.getIconsfromList();
  }

  get timeLines() {
    return this._timeLines;
  }

  get listIcons() {
      return this._listIcons;
  }

  set listIcons(data: {src?: string; alt?: string;}[]) {
    this._listIcons = data;
}

  // listIcons: { [x: string]:{src?: string; alt?: string;} }[] = [];

  constructor() {
  }

  getIconsfromList(): {src?: string; alt?: string;}[] {
  return this.timeLines.map(item => ({...item.logo}))
}
}
