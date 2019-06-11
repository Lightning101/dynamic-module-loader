import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCanvasDrawComponent } from './simple-canvas-draw.component';

describe('SimpleCanvasDrawComponent', () => {
  let component: SimpleCanvasDrawComponent;
  let fixture: ComponentFixture<SimpleCanvasDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCanvasDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCanvasDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
