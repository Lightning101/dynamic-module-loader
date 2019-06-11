(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('simpletest', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.simpletest = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpletestService = /** @class */ (function () {
        function SimpletestService() {
        }
        SimpletestService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SimpletestService.ctorParameters = function () { return []; };
        /** @nocollapse */ SimpletestService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SimpletestService_Factory() { return new SimpletestService(); }, token: SimpletestService, providedIn: "root" });
        return SimpletestService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpletestComponent = /** @class */ (function () {
        function SimpletestComponent() {
        }
        /**
         * @return {?}
         */
        SimpletestComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        SimpletestComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-simpletest',
                        template: "\n    <p>\n      simpletest works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        SimpletestComponent.ctorParameters = function () { return []; };
        return SimpletestComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SimpletestModule = /** @class */ (function () {
        function SimpletestModule() {
        }
        SimpletestModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SimpletestComponent],
                        imports: [],
                        exports: [SimpletestComponent]
                    },] }
        ];
        return SimpletestModule;
    }());

    exports.SimpletestComponent = SimpletestComponent;
    exports.SimpletestModule = SimpletestModule;
    exports.SimpletestService = SimpletestService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=simpletest.umd.js.map
