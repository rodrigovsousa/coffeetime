/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/bidi/dir.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Output, Input, EventEmitter, } from '@angular/core';
import { Directionality } from './directionality';
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
import * as ɵngcc0 from '@angular/core';
export class Dir {
    constructor() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new EventEmitter();
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get dir() { return this._dir; }
    /**
     * @param {?} value
     * @return {?}
     */
    set dir(value) {
        /** @type {?} */
        const old = this._dir;
        /** @type {?} */
        const normalizedValue = value ? value.toLowerCase() : value;
        this._rawDir = value;
        this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
        if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
        }
    }
    /**
     * Current layout direction of the element.
     * @return {?}
     */
    get value() { return this.dir; }
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    ngAfterContentInit() {
        this._isInitialized = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.change.complete();
    }
}
Dir.ɵfac = function Dir_Factory(t) { return new (t || Dir)(); };
Dir.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: Dir, selectors: [["", "dir", ""]], hostVars: 1, hostBindings: function Dir_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("dir", ctx._rawDir);
    } }, inputs: { dir: "dir" }, outputs: { change: "dirChange" }, exportAs: ["dir"], features: [ɵngcc0.ɵɵProvidersFeature([{ provide: Directionality, useExisting: Dir }])] });
Dir.propDecorators = {
    change: [{ type: Output, args: ['dirChange',] }],
    dir: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Dir, [{
        type: Directive,
        args: [{
                selector: '[dir]',
                providers: [{ provide: Directionality, useExisting: Dir }],
                host: { '[attr.dir]': '_rawDir' },
                exportAs: 'dir'
            }]
    }], function () { return []; }, { change: [{
            type: Output,
            args: ['dirChange']
        }], dir: [{
            type: Input
        }] }); })();
if (false) {
    /**
     * Normalized direction that accounts for invalid/unsupported values.
     * @type {?}
     * @private
     */
    Dir.prototype._dir;
    /**
     * Whether the `value` has been set to its initial value.
     * @type {?}
     * @private
     */
    Dir.prototype._isInitialized;
    /**
     * Direction as passed in by the consumer.
     * @type {?}
     */
    Dir.prototype._rawDir;
    /**
     * Event emitted when the direction changes.
     * @type {?}
     */
    Dir.prototype.change;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2JpZGkvZGlyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxZQUFZLEdBR2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFZLGNBQWMsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQzNEO0FBQ0c7QUFDZ0U7QUFDakU7QUFDMkY7QUFDOUM7O0FBUS9DLE1BQU0sT0FBTyxHQUFHO0FBQUcsSUFObkI7QUFDRztBQUFZO0FBRUg7QUFBWSxRQUtkLFNBQUksR0FBYyxLQUFLLENBQUM7QUFDbEM7QUFDVztBQUNFO0FBQVksUUFBZixtQkFBYyxHQUFZLEtBQUssQ0FBQztBQUMxQztBQUNXO0FBQ0k7QUFFUixRQUNnQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztBQUM5RCxJQTJCQSxDQUFDO0FBQ0Q7QUFBUTtBQUFzQjtBQUFtQjtBQUFRLElBMUJ2RCxJQUNJLEdBQUcsS0FBZ0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM1QztBQUFRO0FBQ047QUFBbUI7QUFDbkIsSUFGQSxJQUFJLEdBQUcsQ0FBQyxLQUFnQjtBQUMxQjtBQUF5QixjQUFmLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSTtBQUN6QjtBQUF5QixjQUFmLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUMvRCxRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLFFBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLGVBQWUsS0FBSyxLQUFLLElBQUksZUFBZSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNuRyxRQUNJLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUNsRCxZQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUNGO0FBQW1CO0FBQVEsSUFBOUIsSUFBSSxLQUFLLEtBQWdCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDN0M7QUFDTztBQUNGO0FBQW1CO0FBQ2pCLElBREwsa0JBQWtCO0FBQ3BCLFFBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDL0IsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUNDO0FBQVEsSUFEZCxXQUFXO0FBQ2IsUUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNIOytCQTdDQyxTQUFTLFNBQUM7RUFDVCxRQUFRLEVBQUUsT0FBTyxrQkFDakIsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxrQkFDeEQsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBQztPQUMvQixRQUFRLEVBQUUsS0FBSyxlQUNoQjtnTEFDSTtBQUFDO0FBQXVCLHFCQVcxQixNQUFNLFNBQUMsV0FBVztBQUFPLGtCQUd6QixLQUFLO0FBQ1A7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUM7QUFBYTtBQUFRO0FBRUQ7QUFDVjtBQUFnQjtBQUFRLElBaEJwQyxtQkFBZ0M7QUFDbEM7QUFDTztBQUNGO0FBQWlCO0FBQWdCO0FBRXBDLElBRkEsNkJBQXdDO0FBQzFDO0FBQ087QUFDRjtBQUVIO0FBQVEsSUFGUixzQkFBZ0I7QUFDbEI7QUFDTztBQUNGO0FBQWlCO0FBQVEsSUFBNUIscUJBQTREO0FBQzlEO0FBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBPdXRwdXQsXG4gIElucHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7RGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eX0gZnJvbSAnLi9kaXJlY3Rpb25hbGl0eSc7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIGxpc3RlbiBmb3IgY2hhbmdlcyBvZiBkaXJlY3Rpb24gb2YgcGFydCBvZiB0aGUgRE9NLlxuICpcbiAqIFByb3ZpZGVzIGl0c2VsZiBhcyBEaXJlY3Rpb25hbGl0eSBzdWNoIHRoYXQgZGVzY2VuZGFudCBkaXJlY3RpdmVzIG9ubHkgbmVlZCB0byBldmVyIGluamVjdFxuICogRGlyZWN0aW9uYWxpdHkgdG8gZ2V0IHRoZSBjbG9zZXN0IGRpcmVjdGlvbi5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Rpcl0nLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRGlyZWN0aW9uYWxpdHksIHVzZUV4aXN0aW5nOiBEaXJ9XSxcbiAgaG9zdDogeydbYXR0ci5kaXJdJzogJ19yYXdEaXInfSxcbiAgZXhwb3J0QXM6ICdkaXInLFxufSlcbmV4cG9ydCBjbGFzcyBEaXIgaW1wbGVtZW50cyBEaXJlY3Rpb25hbGl0eSwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIE5vcm1hbGl6ZWQgZGlyZWN0aW9uIHRoYXQgYWNjb3VudHMgZm9yIGludmFsaWQvdW5zdXBwb3J0ZWQgdmFsdWVzLiAqL1xuICBwcml2YXRlIF9kaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBgdmFsdWVgIGhhcyBiZWVuIHNldCB0byBpdHMgaW5pdGlhbCB2YWx1ZS4gKi9cbiAgcHJpdmF0ZSBfaXNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBEaXJlY3Rpb24gYXMgcGFzc2VkIGluIGJ5IHRoZSBjb25zdW1lci4gKi9cbiAgX3Jhd0Rpcjogc3RyaW5nO1xuXG4gIC8qKiBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGRpcmVjdGlvbiBjaGFuZ2VzLiAqL1xuICBAT3V0cHV0KCdkaXJDaGFuZ2UnKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERpcmVjdGlvbj4oKTtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBASW5wdXQoKVxuICBnZXQgZGlyKCk6IERpcmVjdGlvbiB7IHJldHVybiB0aGlzLl9kaXI7IH1cbiAgc2V0IGRpcih2YWx1ZTogRGlyZWN0aW9uKSB7XG4gICAgY29uc3Qgb2xkID0gdGhpcy5fZGlyO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IHZhbHVlID8gdmFsdWUudG9Mb3dlckNhc2UoKSA6IHZhbHVlO1xuXG4gICAgdGhpcy5fcmF3RGlyID0gdmFsdWU7XG4gICAgdGhpcy5fZGlyID0gKG5vcm1hbGl6ZWRWYWx1ZSA9PT0gJ2x0cicgfHwgbm9ybWFsaXplZFZhbHVlID09PSAncnRsJykgPyBub3JtYWxpemVkVmFsdWUgOiAnbHRyJztcblxuICAgIGlmIChvbGQgIT09IHRoaXMuX2RpciAmJiB0aGlzLl9pc0luaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuX2Rpcik7XG4gICAgfVxuICB9XG5cbiAgLyoqIEN1cnJlbnQgbGF5b3V0IGRpcmVjdGlvbiBvZiB0aGUgZWxlbWVudC4gKi9cbiAgZ2V0IHZhbHVlKCk6IERpcmVjdGlvbiB7IHJldHVybiB0aGlzLmRpcjsgfVxuXG4gIC8qKiBJbml0aWFsaXplIG9uY2UgZGVmYXVsdCB2YWx1ZSBoYXMgYmVlbiBzZXQuICovXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hhbmdlLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==