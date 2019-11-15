import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Counter } from './counter';
import { NgxActionCableBroadcaster, NgxActionCableService } from 'ngx-actioncable';
import { Component } from '@angular/core';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public initialValue= [0,0,0];
  url = 'https://lp4asgadot.herokuapp.com/counters/';
//  private counterObservable = new EventEmitter()
  constructor(private httpClient :HttpClient) { }
  
  reset(){
    //this.initialValue=[0,0,0];
  }
  /* increment(position: number) : number{
    this.initialValue[position]++;
    return this.initialValue[position];
  }*/

  increment(id:number): Observable<Counter>{
    return this.httpClient.patch<Counter>(this.url + id + '.json', {});
  }
  decrement(position: number): number{
    this.initialValue[position];
    return this.initialValue[position];
  }
  resetOne(position: number){
    this.initialValue[position]=0;
    return this.initialValue[position];
  }
  getCounterValue(id :number) : Observable<Counter>{
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/"+id+".json");
  }
  getOneCounter(id: number): Observable<Counter> {
    return this.httpClient.get<Counter>(this.url + id + '.json');
  }
  getCounters(): Observable<Counter[]> {
    return this.httpClient.get<Counter[]>("https://lp4asgadot.herokuapp.com/counters.json");
  }
}
