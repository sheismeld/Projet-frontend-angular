import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Counter } from '../counter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter-data',
  templateUrl: './counter-data.component.html',
  styleUrls: ['./counter-data.component.css']
})
export class CounterDataComponent implements OnInit {
  @Input() id:number;

  counter: Counter = new Counter;
  constructor(public counterService: CounterService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      () => {
        this.getOneCounter();
      }
    )
  }

  increment(){
    //this.counterService.increment(this.position);
        /*if(this.position == 1) this.counterService.increment(47).subscribe(counter => this.value = counter);
        if(this.position == 2) this.counterService.increment(48).subscribe(counter => this.value = counter);
        if(this.position == 3) this.counterService.increment(51).subscribe(counter => this.value = counter);*/
        this.counterService.increment(this.counter.id).subscribe(counter => this.counter.value = counter.value);
  }
  decrement(){
    //this.counterService.decrement(this.position);
  }
  resetOne(){
    //this.counterService.resetOne(this.position);
  }
  getOneCounter() {
    this.counter.id = +this.route.snapshot.paramMap.get('id'); 
    this.counterService.getOneCounter(this.counter.id).subscribe(counter => {this.counter = counter;});
  }

}

