import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  title ="compteur 1"
  @Input() position : number;

  value: Counter;
  constructor(public counterService: CounterService) { }

  ngOnInit() {
    if (this.position == 1){
      this.counterService.getCounterValue(47)
      .subscribe(counter => this.value =  counter)
    }
    if (this.position == 2){
      this.counterService.getCounterValue(48)
      .subscribe(counter => this.value =  counter)
    }
    if (this.position == 3){
      this.counterService.getCounterValue(51)
      .subscribe(counter => this.value =  counter)
    }
  }
  increment(){
    //this.counterService.increment(this.position);
        if(this.position == 1) this.counterService.increment(47).subscribe(counter => this.value = counter);
        if(this.position == 2) this.counterService.increment(48).subscribe(counter => this.value = counter);
        if(this.position == 3) this.counterService.increment(51).subscribe(counter => this.value = counter);
  }
  decrement(){
    this.counterService.decrement(this.position);
  }
  resetOne(){
    this.counterService.resetOne(this.position);
  }
}