import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindowDocComponent } from './modal-window-doc.component';

describe('ModalWindowDocComponent', () => {
  let component: ModalWindowDocComponent;
  let fixture: ComponentFixture<ModalWindowDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWindowDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWindowDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
