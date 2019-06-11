(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('simple-canvas-draw', ['exports', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory(global['simple-canvas-draw'] = {}, global.ng.core, global.rxjs, global.rxjs.operators));
}(this, function (exports, core, rxjs, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpleCanvasDrawService = /** @class */ (function () {
        function SimpleCanvasDrawService() {
        }
        SimpleCanvasDrawService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SimpleCanvasDrawService.ctorParameters = function () { return []; };
        /** @nocollapse */ SimpleCanvasDrawService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SimpleCanvasDrawService_Factory() { return new SimpleCanvasDrawService(); }, token: SimpleCanvasDrawService, providedIn: "root" });
        return SimpleCanvasDrawService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpleCanvasDrawComponent = /** @class */ (function () {
        function SimpleCanvasDrawComponent() {
        }
        /**
         * @return {?}
         */
        SimpleCanvasDrawComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        SimpleCanvasDrawComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-SimpleCanvasDraw',
                        template: "\n    <p>\n      simple-canvas-draw works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SimpleCanvasDrawComponent.ctorParameters = function () { return []; };
        return SimpleCanvasDrawComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CanvasComponent = /** @class */ (function () {
        function CanvasComponent() {
            this.width = 400;
            this.height = 400;
        }
        /**
         * @return {?}
         */
        CanvasComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var canvasEl = this.canvas.nativeElement;
            this.cx = canvasEl.getContext('2d');
            canvasEl.width = this.width;
            canvasEl.height = this.height;
            this.cx.lineWidth = 3;
            this.cx.lineCap = 'round';
            this.cx.strokeStyle = '#000';
            this.captureEvents(canvasEl);
        };
        /**
         * @private
         * @param {?} canvasEl
         * @return {?}
         */
        CanvasComponent.prototype.captureEvents = /**
         * @private
         * @param {?} canvasEl
         * @return {?}
         */
        function (canvasEl) {
            var _this = this;
            rxjs.fromEvent(canvasEl, 'mousedown')
                .pipe(operators.switchMap((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                return rxjs.fromEvent(canvasEl, 'mousemove')
                    .pipe(operators.takeUntil(rxjs.fromEvent(canvasEl, 'mouseup')), operators.takeUntil(rxjs.fromEvent(canvasEl, 'mouseleave')), operators.pairwise() /* Return the previous and last values as array */);
            }))).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var rect = canvasEl.getBoundingClientRect();
                /** @type {?} */
                var prevPos = {
                    x: res[0].clientX - rect.left,
                    y: res[0].clientY - rect.top
                };
                /** @type {?} */
                var currentPos = {
                    x: res[1].clientX - rect.left,
                    y: res[1].clientY - rect.top
                };
                _this.drawOnCanvas(prevPos, currentPos);
            }));
        };
        /**
         * @private
         * @param {?} prevPos
         * @param {?} currentPos
         * @return {?}
         */
        CanvasComponent.prototype.drawOnCanvas = /**
         * @private
         * @param {?} prevPos
         * @param {?} currentPos
         * @return {?}
         */
        function (prevPos, currentPos) {
            if (!this.cx) {
                return;
            }
            this.cx.beginPath();
            if (prevPos) {
                this.cx.moveTo(prevPos.x, prevPos.y); // from
                this.cx.lineTo(currentPos.x, currentPos.y);
                this.cx.stroke();
            }
        };
        CanvasComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-canvas',
                        template: '<canvas #canvas></canvas>',
                        styles: ['canvas { border: 1px solid #000; }']
                    }] }
        ];
        CanvasComponent.propDecorators = {
            canvas: [{ type: core.ViewChild, args: ['canvas', { static: true },] }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }]
        };
        return CanvasComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpleCanvasDrawModule = /** @class */ (function () {
        function SimpleCanvasDrawModule() {
        }
        SimpleCanvasDrawModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SimpleCanvasDrawComponent, CanvasComponent],
                        imports: [],
                        exports: [SimpleCanvasDrawComponent, CanvasComponent]
                    },] }
        ];
        return SimpleCanvasDrawModule;
    }());

    exports.SimpleCanvasDrawComponent = SimpleCanvasDrawComponent;
    exports.SimpleCanvasDrawModule = SimpleCanvasDrawModule;
    exports.SimpleCanvasDrawService = SimpleCanvasDrawService;
    exports.ɵa = CanvasComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=simple-canvas-draw.umd.js.map
