import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-carousel',
  templateUrl: './tech-carousel.component.html',
  styleUrls: ['./tech-carousel.component.scss'],
  providers: []
})
export class TechCarouselComponent {

  frontendTechnologies = [
    "bx bxl-javascript bx-tada",
    "bx bxl-html5 bx-tada text-orange",
    "bx bxl-css3 bx-tada",
    "bx bxl-redux bx-tada",
    "bx bxl-react bx-tada",
    "bx bxl-tailwind-css bx-tada",
    "bx bxl-angular bx-tada",
    "bx bxl-typescript bx-tada",
    "bx bxl-bootstrap bx-tada"
  ];

  backendTechnologies = [
    "Express",
    "bx bxl-bootstrap bx-tada",
    "bx bxl-firebase bx-tada",
    "bx bxl-c-plus-plus bx-tada",
  ];

  databases = [
    "bx bxl-mongodb bx-tada",
    "bx bxl-postgresql bx-tada"
  ];

  tools = [
    "bx bxl-git bx-tada",
    "bx bxl-figma bx-tada",
  ];

  techArray = [
    { category: "Frontend Technologies", technologies: this.frontendTechnologies },
    { category: "Backend Technologies", technologies: this.backendTechnologies },
    { category: "Databases", technologies: this.databases },
    { category: "Tools", technologies: this.tools }
  ];

}
