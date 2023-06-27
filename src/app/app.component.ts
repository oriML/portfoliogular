import { Component, OnInit } from '@angular/core';
import { init } from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'oml-portfolio';

  ngOnInit(): void {
    init();
  }
}
