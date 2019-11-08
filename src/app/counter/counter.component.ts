import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable, from } from 'rxjs';
import { Counter } from '../counter';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() position: number;

  value: Counter;

  constructor(public counterService: CounterService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("call counter")
    this.route.paramMap.subscribe(params => {
      this.counterService.getCounterValue(+params.get('id'))
          .subscribe(counter => this.value =  counter)
    });
  }

  increment() {
    this.counterService.increment(this.position);
  }

}