import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  details = {
    title: 'Hi! 👋',
    subTitle: 'My name is ',
    name: 'Ori Menachem Levi',
    content:`I am a Full Stack Developer with experience in ASP.Net, C#, SQL, Angular, React, and more.\nThroughout my career, I have successfully developed and maintained large-scale systems, collaborated with teams, and demonstrated expertise in various technologies and tools.`,
    scrolltent: 'scroll down to see my stack!'
  }
}
