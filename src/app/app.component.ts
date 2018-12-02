import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedHeading;
  getHeadings(): Array<string> {
    return ['About', 'Education', 'Experience', 'Leadership'];
  }
}
