import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-carousel',
  templateUrl: './tech-carousel.component.html',
  styleUrls: ['./tech-carousel.component.scss'],
  providers: []
})
export class TechCarouselComponent {

  technologies = [
    "javascript",
    "react",
    "html5",
    "css3",
    "node-js",
    "redux",
    "tailwind-css",
    "angular",
    "typescript",
    "csharp",
    "bootstrap",
    "sql",
    "postgresql",
    "firebase",
    "git",
    "postman",
    "figma",
  ];

  techArray = [
    { category: "Frontend Technologies", technologies: this.technologies }
  ];

}
