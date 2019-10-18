import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  initialValu =[12, 6, 25]
  constructor() { }

  increment(position: number):number{
    this.initialValue[position++];

  }
}
