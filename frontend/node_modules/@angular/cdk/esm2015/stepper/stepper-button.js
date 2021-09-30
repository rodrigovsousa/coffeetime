/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/stepper/stepper-button.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, HostListener, Input } from '@angular/core';
import { CdkStepper } from './stepper';
/**
 * Button that moves to the next step in a stepper workflow.
 */
import * as ɵngcc0 from '@angular/core';
export class CdkStepperNext {
    /**
     * @param {?} _stepper
     */
    constructor(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the next button. Defaults to "submit" if not specified.
         */
        this.type = 'submit';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @return {?}
     */
    _handleClick() {
        this._stepper.next();
    }
}
CdkStepperNext.ɵfac = function CdkStepperNext_Factory(t) { return new (t || CdkStepperNext)(ɵngcc0.ɵɵdirectiveInject(CdkStepper)); };
CdkStepperNext.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkStepperNext, selectors: [["button", "cdkStepperNext", ""]], hostVars: 1, hostBindings: function CdkStepperNext_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CdkStepperNext_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("type", ctx.type);
    } }, inputs: { type: "type" } });
/** @nocollapse */
CdkStepperNext.ctorParameters = () => [
    { type: CdkStepper }
];
CdkStepperNext.propDecorators = {
    type: [{ type: Input }],
    _handleClick: [{ type: HostListener, args: ['click',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStepperNext, [{
        type: Directive,
        args: [{
                selector: 'button[cdkStepperNext]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: Input
        }], _handleClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
if (false) {
    /**
     * Type of the next button. Defaults to "submit" if not specified.
     * @type {?}
     */
    CdkStepperNext.prototype.type;
    /** @type {?} */
    CdkStepperNext.prototype._stepper;
}
/**
 * Button that moves to the previous step in a stepper workflow.
 */
export class CdkStepperPrevious {
    /**
     * @param {?} _stepper
     */
    constructor(_stepper) {
        this._stepper = _stepper;
        /**
         * Type of the previous button. Defaults to "button" if not specified.
         */
        this.type = 'button';
    }
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    /**
     * @return {?}
     */
    _handleClick() {
        this._stepper.previous();
    }
}
CdkStepperPrevious.ɵfac = function CdkStepperPrevious_Factory(t) { return new (t || CdkStepperPrevious)(ɵngcc0.ɵɵdirectiveInject(CdkStepper)); };
CdkStepperPrevious.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkStepperPrevious, selectors: [["button", "cdkStepperPrevious", ""]], hostVars: 1, hostBindings: function CdkStepperPrevious_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function CdkStepperPrevious_click_HostBindingHandler() { return ctx._handleClick(); });
    } if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("type", ctx.type);
    } }, inputs: { type: "type" } });
/** @nocollapse */
CdkStepperPrevious.ctorParameters = () => [
    { type: CdkStepper }
];
CdkStepperPrevious.propDecorators = {
    type: [{ type: Input }],
    _handleClick: [{ type: HostListener, args: ['click',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkStepperPrevious, [{
        type: Directive,
        args: [{
                selector: 'button[cdkStepperPrevious]',
                host: {
                    '[type]': 'type'
                }
            }]
    }], function () { return [{ type: CdkStepper }]; }, { type: [{
            type: Input
        }], _handleClick: [{
            type: HostListener,
            args: ['click']
        }] }); })();
if (false) {
    /**
     * Type of the previous button. Defaults to "button" if not specified.
     * @type {?}
     */
    CdkStepperPrevious.prototype.type;
    /** @type {?} */
    CdkStepperPrevious.prototype._stepper;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1idXR0b24uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc3RlcHBlci9zdGVwcGVyLWJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNyQztBQUNHO0FBQTZEOztBQU9oRSxNQUFNLE9BQU8sY0FBYztBQUMzQjtBQUFRO0FBQTJCO0FBQVEsSUFHekMsWUFBbUIsUUFBb0I7QUFBSSxRQUF4QixhQUFRLEdBQVIsUUFBUSxDQUFZO0FBQUM7QUFFbkM7QUFBMkU7QUFDM0UsUUFMSSxTQUFJLEdBQVcsUUFBUSxDQUFDO0FBQ25DLElBQzRDLENBQUM7QUFDN0M7QUFFQztBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBQVE7QUFDTjtBQUNYLElBREUsWUFBWTtBQUNkLFFBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6QixJQUFFLENBQUM7QUFDSDswQ0FyQkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSx3QkFBd0Isa0JBQ2xDO0FBQUksRUFBRSxzQkFDSixRQUFRLEVBQUUsTUFBTSxtQkFDakIsY0FDRjs7OztxQ0FDSTtBQUFDO0FBQW1CO0FBQ1UsWUFWM0IsVUFBVTtBQUFHO0FBQUc7QUFFTCxtQkFTaEIsS0FBSztBQUFLLDJCQVNWLFlBQVksU0FBQyxPQUFPO0FBQ25COzs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUFDO0FBQ047QUFBUTtBQUlzQztBQUFpQjtBQUM3RCxJQWhCRCw4QkFBaUM7QUFDbkM7QUFDb0IsSUFBTixrQ0FBMkI7QUFBQztBQUFFO0FBRTNDO0FBQWlFO0FBa0JsRSxNQUFNLE9BQU8sa0JBQWtCO0FBQy9CO0FBQVE7QUFBMkI7QUFBUSxJQUd6QyxZQUFtQixRQUFvQjtBQUFJLFFBQXhCLGFBQVEsR0FBUixRQUFRLENBQVk7QUFBQztBQUVuQztBQUErRTtBQUMzRSxRQUxBLFNBQUksR0FBVyxRQUFRLENBQUM7QUFDbkMsSUFDNEMsQ0FBQztBQUM3QztBQUVDO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFBUTtBQUNOO0FBQ1gsSUFERSxZQUFZO0FBQ2QsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNIOzhDQXJCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLDRCQUE0QixrQkFDdEMsSUFBSSxFQUFFO29CQUNKLFFBQVEsRUFBRSxNQUFNLG1CQUNqQixjQUNGOzs7O3FDQUNJO0FBQUM7QUFBbUI7QUFDVSxZQWxDM0IsVUFBVTtBQUFHO0FBQUc7QUFFRCxtQkFpQ3BCLEtBQUs7QUFBSywyQkFTVixZQUFZLFNBQUMsT0FBTztBQUNuQjs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQztBQUNOO0FBQVE7QUFHdUM7QUFBaUI7QUFBUSxJQWR2RSxrQ0FBaUM7QUFDbkM7QUFDb0IsSUFBTixzQ0FBMkI7QUFBQztBQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtDZGtTdGVwcGVyfSBmcm9tICcuL3N0ZXBwZXInO1xuXG4vKiogQnV0dG9uIHRoYXQgbW92ZXMgdG8gdGhlIG5leHQgc3RlcCBpbiBhIHN0ZXBwZXIgd29ya2Zsb3cuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdidXR0b25bY2RrU3RlcHBlck5leHRdJyxcbiAgaG9zdDoge1xuICAgICdbdHlwZV0nOiAndHlwZScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrU3RlcHBlck5leHQge1xuICAvKiogVHlwZSBvZiB0aGUgbmV4dCBidXR0b24uIERlZmF1bHRzIHRvIFwic3VibWl0XCIgaWYgbm90IHNwZWNpZmllZC4gKi9cbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ3N1Ym1pdCc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIF9zdGVwcGVyOiBDZGtTdGVwcGVyKSB7fVxuXG4gIC8vIFdlIGhhdmUgdG8gdXNlIGEgYEhvc3RMaXN0ZW5lcmAgaGVyZSBpbiBvcmRlciB0byBzdXBwb3J0IGJvdGggSXZ5IGFuZCBWaWV3RW5naW5lLlxuICAvLyBJbiBJdnkgdGhlIGBob3N0YCBiaW5kaW5ncyB3aWxsIGJlIG1lcmdlZCB3aGVuIHRoaXMgY2xhc3MgaXMgZXh0ZW5kZWQsIHdoZXJlYXMgaW5cbiAgLy8gVmlld0VuZ2luZSB0aGV5J3JlIG92ZXJ3cml0dGVuLlxuICAvLyBUT0RPKGNyaXNiZXRvKTogd2UgbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAgb25jZSBJdnkgaXMgdHVybmVkIG9uIGJ5IGRlZmF1bHQuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ob3N0LWRlY29yYXRvci1pbi1jb25jcmV0ZVxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLl9zdGVwcGVyLm5leHQoKTtcbiAgfVxufVxuXG4vKiogQnV0dG9uIHRoYXQgbW92ZXMgdG8gdGhlIHByZXZpb3VzIHN0ZXAgaW4gYSBzdGVwcGVyIHdvcmtmbG93LiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uW2Nka1N0ZXBwZXJQcmV2aW91c10nLFxuICBob3N0OiB7XG4gICAgJ1t0eXBlXSc6ICd0eXBlJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBDZGtTdGVwcGVyUHJldmlvdXMge1xuICAvKiogVHlwZSBvZiB0aGUgcHJldmlvdXMgYnV0dG9uLiBEZWZhdWx0cyB0byBcImJ1dHRvblwiIGlmIG5vdCBzcGVjaWZpZWQuICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdidXR0b24nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfc3RlcHBlcjogQ2RrU3RlcHBlcikge31cblxuICAvLyBXZSBoYXZlIHRvIHVzZSBhIGBIb3N0TGlzdGVuZXJgIGhlcmUgaW4gb3JkZXIgdG8gc3VwcG9ydCBib3RoIEl2eSBhbmQgVmlld0VuZ2luZS5cbiAgLy8gSW4gSXZ5IHRoZSBgaG9zdGAgYmluZGluZ3Mgd2lsbCBiZSBtZXJnZWQgd2hlbiB0aGlzIGNsYXNzIGlzIGV4dGVuZGVkLCB3aGVyZWFzIGluXG4gIC8vIFZpZXdFbmdpbmUgdGhleSdyZSBvdmVyd3JpdHRlbi5cbiAgLy8gVE9ETyhjcmlzYmV0byk6IHdlIG1vdmUgdGhpcyBiYWNrIGludG8gYGhvc3RgIG9uY2UgSXZ5IGlzIHR1cm5lZCBvbiBieSBkZWZhdWx0LlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taG9zdC1kZWNvcmF0b3ItaW4tY29uY3JldGVcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5fc3RlcHBlci5wcmV2aW91cygpO1xuICB9XG59XG4iXX0=