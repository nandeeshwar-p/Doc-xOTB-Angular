import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenuDocComponent } from './context-menu-doc.component';

describe('ContextMenuComponent', () => {
  let component: ContextMenuDocComponent;
  let fixture: ComponentFixture<ContextMenuDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextMenuDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextMenuDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
