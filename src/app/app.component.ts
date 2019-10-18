import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counters';
  initialValue = [12, 6, 25];

  reset(){
    this.initialValue = [0, 0, 0];
  }
}
