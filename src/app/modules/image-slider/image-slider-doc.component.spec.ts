import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSliderDocComponent } from './image-slider-doc.component';

describe('ImageSliderDocComponent', () => {
  let component: ImageSliderDocComponent;
  let fixture: ComponentFixture<ImageSliderDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSliderDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSliderDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
