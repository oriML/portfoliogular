import { Component, Input } from '@angular/core';
import { ITechListModel } from 'src/app/pages/models';

@Component({
  selector: 'app-skills-table',
  templateUrl: './skills-table.component.html',
  styleUrls: ['./skills-table.component.scss']
})
export class SkillsTableComponent {
  private _techList: ITechListModel[] = [];

  @Input() set techList(data: ITechListModel[]) {
    this._techList = ([...data]).splice(0, 10);
  }

  get techList(){
    return this._techList;
  }
}
