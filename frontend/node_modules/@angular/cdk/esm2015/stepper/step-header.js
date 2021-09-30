/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/stepper/step-header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class CdkStepHeader {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
    /**
     * Focuses the step header.
     * @return {?}
     */
    focus() {
        this._elementRef.nativeElement.focus();
    }
}
CdkStepHeader.ɵfac = function CdkStepHeader_Factory(t) { return new (t || CdkStepHeader)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkStepHeader.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkStepHeader, selectors: [["", "cdkStepHeader", ""]], hostAttrs: ["role", "tab"] });
/** @nocollapse */
CdkStepHeader.ctorParameters = () => [
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStepHeader, [{
        type: Directive,
        args: [{
                selector: '[cdkStepHeader]',
                host: {
                    'role': 'tab'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CdkStepHeader.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1oZWFkZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc3RlcHBlci9zdGVwLWhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFVcEQsTUFBTSxPQUFPLGFBQWE7QUFBRztBQUFRO0FBQzFCO0FBQVEsSUFBakIsWUFBc0IsV0FBb0M7QUFBSSxRQUF4QyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7QUFBQyxJQUFFLENBQUM7QUFDaEU7QUFDTztBQUNGO0FBQ087QUFBUSxJQURsQixLQUFLO0FBQ1AsUUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMzQyxJQUFFLENBQUM7QUFDSDt5Q0FiQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGlCQUFpQixrQkFDM0IsSUFBSSxFQUFFO1lBQ0osTUFBTSxFQUFFLEtBQUssbUJBQ2QsZUFDRixnRkFDSTtBQUFDO0FBQW1CO0FBQ2pCLFlBWFcsVUFBVTtBQUFHOzs7Ozs7Ozs7MkVBQUU7QUFBQztBQUFhO0FBQzdDO0FBQWlCO0FBQWtCO0FBQVEsSUFVaEMsb0NBQThDO0FBQUM7QUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZvY3VzYWJsZU9wdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtTdGVwSGVhZGVyXScsXG4gIGhvc3Q6IHtcbiAgICAncm9sZSc6ICd0YWInLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDZGtTdGVwSGVhZGVyIGltcGxlbWVudHMgRm9jdXNhYmxlT3B0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge31cblxuICAvKiogRm9jdXNlcyB0aGUgc3RlcCBoZWFkZXIuICovXG4gIGZvY3VzKCkge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG59XG4iXX0=