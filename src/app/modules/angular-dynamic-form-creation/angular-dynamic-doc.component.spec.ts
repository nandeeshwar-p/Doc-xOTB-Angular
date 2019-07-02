import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDynamicDocComponent } from './angular-dynamic-doc.component';

describe('AngularDynamicDocComponent', () => {
  let component: AngularDynamicDocComponent;
  let fixture: ComponentFixture<AngularDynamicDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDynamicDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDynamicDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
