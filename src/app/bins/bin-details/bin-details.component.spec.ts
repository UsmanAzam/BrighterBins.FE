import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinDetailsComponent } from './bin-details.component';

describe('BinDetailsComponent', () => {
  let component: BinDetailsComponent;
  let fixture: ComponentFixture<BinDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
