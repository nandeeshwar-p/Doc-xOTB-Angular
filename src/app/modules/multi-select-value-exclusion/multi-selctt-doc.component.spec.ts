import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelcttDocComponent } from './multi-selctt-doc.component';

describe('MultiSelcttDocComponent', () => {
  let component: MultiSelcttDocComponent;
  let fixture: ComponentFixture<MultiSelcttDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelcttDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelcttDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
