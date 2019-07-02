import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormDocComponent } from './dynamic-form-doc.component';

describe('DynamicFormDocComponent', () => {
  let component: DynamicFormDocComponent;
  let fixture: ComponentFixture<DynamicFormDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
