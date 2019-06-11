import { TestBed } from '@angular/core/testing';

import { SimpleCanvasDrawService } from './simple-canvas-draw.service';

describe('SimpleCanvasDrawService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleCanvasDrawService = TestBed.get(SimpleCanvasDrawService);
    expect(service).toBeTruthy();
  });
});
