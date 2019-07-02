import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedometerDocComponent } from './speedometer-doc.component';

describe('SpeedometerDocComponent', () => {
  let component: SpeedometerDocComponent;
  let fixture: ComponentFixture<SpeedometerDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedometerDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedometerDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
