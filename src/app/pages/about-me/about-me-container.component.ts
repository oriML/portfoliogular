import { Component, OnInit } from '@angular/core';
import { init } from "aos";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me-container.component.html',
  styleUrls: ['./about-me-container.component.scss']
})
export class AboutMeComponent implements OnInit {

  ngOnInit(): void {
    init();
  }

}
