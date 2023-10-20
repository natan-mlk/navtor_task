import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEmissionsComponent } from './chart-emissions.component';

describe('ChartEmissionsComponent', () => {
  let component: ChartEmissionsComponent;
  let fixture: ComponentFixture<ChartEmissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartEmissionsComponent]
    });
    fixture = TestBed.createComponent(ChartEmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
