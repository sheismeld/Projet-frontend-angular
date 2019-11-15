import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDataComponent } from './counter-data.component';

describe('CounterDataComponent', () => {
  let component: CounterDataComponent;
  let fixture: ComponentFixture<CounterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
