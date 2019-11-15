import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { Counter } from '../counter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counters: Array<Counter> = [];
  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counterService.getCounters()
    .subscribe((_counters) => {
      _counters.forEach((_counter) => {
        // ajout des compteurs dans le tableau
        this.counters.push(_counter);
      });
    });
  }
  reset(){
    this.counterService.reset();
  }
  
}