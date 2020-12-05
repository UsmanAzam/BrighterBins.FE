import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinMessagesChartComponent } from './bin-messages-chart.component';

describe('BinMessagesChartComponent', () => {
  let component: BinMessagesChartComponent;
  let fixture: ComponentFixture<BinMessagesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinMessagesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinMessagesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
