import { Component, OnInit, Input } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  title = "compteur 1"

  @Input()
  value = 0
  constructor() { 
  }

  ngOnInit() {
  }

  increment(){
    this.value++;
  }
}