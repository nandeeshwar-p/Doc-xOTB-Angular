import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEDGEComponent } from './header-edge.component';

describe('HeaderEDGEComponent', () => {
  let component: HeaderEDGEComponent;
  let fixture: ComponentFixture<HeaderEDGEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderEDGEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEDGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
