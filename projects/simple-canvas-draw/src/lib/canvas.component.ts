/**
 * https://medium.com/@tarik.nzl/creating-a-canvas-component-with-free-hand-drawing-with-rxjs-and-angular-61279f577415
 */
import {
    Component, Input, ElementRef, AfterViewInit, ViewChild
} from '@angular/core';

import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';

@Component({
    selector: 'app-canvas',
    template: '<canvas #canvas></canvas>',
    styles: ['canvas { border: 1px solid #000; }']
})
export class CanvasComponent implements AfterViewInit {

    @ViewChild('canvas',{static:true}) public canvas: ElementRef;

    @Input() public width = 400;
    @Input() public height = 400;

    private cx: CanvasRenderingContext2D;

    public ngAfterViewInit() {
        const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
        this.cx = canvasEl.getContext('2d');

        canvasEl.width = this.width;
        canvasEl.height = this.height;

        this.cx.lineWidth = 3;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = '#000';

        this.captureEvents(canvasEl);
    }

    private captureEvents(canvasEl: HTMLCanvasElement) {
        fromEvent(canvasEl, 'mousedown')
            .pipe(
                switchMap((e) => {
                    return fromEvent(canvasEl, 'mousemove')
                        .pipe(
                            takeUntil(fromEvent(canvasEl, 'mouseup')),
                            takeUntil(fromEvent(canvasEl, 'mouseleave')),
                            pairwise() /* Return the previous and last values as array */
                        )
                })
            ).subscribe((res: [MouseEvent, MouseEvent]) => {
                const rect = canvasEl.getBoundingClientRect();

                const prevPos = {
                    x: res[0].clientX - rect.left,
                    y: res[0].clientY - rect.top
                };

                const currentPos = {
                    x: res[1].clientX - rect.left,
                    y: res[1].clientY - rect.top
                };

                this.drawOnCanvas(prevPos, currentPos);
            });
    }

    private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
        if (!this.cx) { return; }

        this.cx.beginPath();

        if (prevPos) {
            this.cx.moveTo(prevPos.x, prevPos.y); // from
            this.cx.lineTo(currentPos.x, currentPos.y);
            this.cx.stroke();
        }
    }

}
