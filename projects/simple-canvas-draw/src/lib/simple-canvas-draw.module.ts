import { NgModule } from '@angular/core';
import { SimpleCanvasDrawComponent } from './simple-canvas-draw.component';
import { CanvasComponent } from './canvas.component';

@NgModule({
  declarations: [SimpleCanvasDrawComponent,CanvasComponent],
  imports: [
  ],
  exports: [SimpleCanvasDrawComponent,CanvasComponent]
})
export class SimpleCanvasDrawModule { }
