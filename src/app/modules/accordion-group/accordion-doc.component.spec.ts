import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDocComponent } from './accordion-doc.component';

describe('AccordionDocComponent', () => {
  let component: AccordionDocComponent;
  let fixture: ComponentFixture<AccordionDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
