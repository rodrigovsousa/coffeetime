/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/text-field/autosize.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { Directive, ElementRef, Input, NgZone, HostListener, } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { auditTime, takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';
/**
 * Directive to automatically resize a textarea to fit its content.
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
export class CdkTextareaAutosize {
    /**
     * @param {?} _elementRef
     * @param {?} _platform
     * @param {?} _ngZone
     */
    constructor(_elementRef, _platform, _ngZone) {
        this._elementRef = _elementRef;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._destroyed = new Subject();
        this._enabled = true;
        /**
         * Value of minRows as of last resize. If the minRows has decreased, the
         * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
         * does not have the same problem because it does not affect the textarea's scrollHeight.
         */
        this._previousMinRows = -1;
        this._textareaElement = (/** @type {?} */ (this._elementRef.nativeElement));
    }
    /**
     * Minimum amount of rows in the textarea.
     * @return {?}
     */
    get minRows() { return this._minRows; }
    /**
     * @param {?} value
     * @return {?}
     */
    set minRows(value) {
        this._minRows = coerceNumberProperty(value);
        this._setMinHeight();
    }
    /**
     * Maximum amount of rows in the textarea.
     * @return {?}
     */
    get maxRows() { return this._maxRows; }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxRows(value) {
        this._maxRows = coerceNumberProperty(value);
        this._setMaxHeight();
    }
    /**
     * Whether autosizing is enabled or not
     * @return {?}
     */
    get enabled() { return this._enabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set enabled(value) {
        value = coerceBooleanProperty(value);
        // Only act if the actual value changed. This specifically helps to not run
        // resizeToFitContent too early (i.e. before ngAfterViewInit)
        if (this._enabled !== value) {
            (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
        }
    }
    /**
     * Sets the minimum height of the textarea as determined by minRows.
     * @return {?}
     */
    _setMinHeight() {
        /** @type {?} */
        const minHeight = this.minRows && this._cachedLineHeight ?
            `${this.minRows * this._cachedLineHeight}px` : null;
        if (minHeight) {
            this._textareaElement.style.minHeight = minHeight;
        }
    }
    /**
     * Sets the maximum height of the textarea as determined by maxRows.
     * @return {?}
     */
    _setMaxHeight() {
        /** @type {?} */
        const maxHeight = this.maxRows && this._cachedLineHeight ?
            `${this.maxRows * this._cachedLineHeight}px` : null;
        if (maxHeight) {
            this._textareaElement.style.maxHeight = maxHeight;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this._platform.isBrowser) {
            // Remember the height which we started with in case autosizing is disabled
            this._initialHeight = this._textareaElement.style.height;
            this.resizeToFitContent();
            this._ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                fromEvent(window, 'resize')
                    .pipe(auditTime(16), takeUntil(this._destroyed))
                    .subscribe((/**
                 * @return {?}
                 */
                () => this.resizeToFitContent(true)));
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     * @private
     * @return {?}
     */
    _cacheTextareaLineHeight() {
        if (this._cachedLineHeight) {
            return;
        }
        // Use a clone element because we have to override some styles.
        /** @type {?} */
        let textareaClone = (/** @type {?} */ (this._textareaElement.cloneNode(false)));
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        (/** @type {?} */ (this._textareaElement.parentNode)).appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.clientHeight;
        (/** @type {?} */ (this._textareaElement.parentNode)).removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this._setMinHeight();
        this._setMaxHeight();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._platform.isBrowser) {
            this.resizeToFitContent();
        }
    }
    /**
     * Resize the textarea to fit its content.
     * @param {?=} force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     * @return {?}
     */
    resizeToFitContent(force = false) {
        // If autosizing is disabled, just skip everything else
        if (!this._enabled) {
            return;
        }
        this._cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this._cachedLineHeight) {
            return;
        }
        /** @type {?} */
        const textarea = (/** @type {?} */ (this._elementRef.nativeElement));
        /** @type {?} */
        const value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
            return;
        }
        /** @type {?} */
        const placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('cdk-textarea-autosize-measuring');
        textarea.placeholder = '';
        // The cdk-textarea-autosize-measuring class includes a 2px padding to workaround an issue with
        // Chrome, so we account for that extra space here by subtracting 4 (2px top + 2px bottom).
        /** @type {?} */
        const height = textarea.scrollHeight - 4;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = `${height}px`;
        textarea.classList.remove('cdk-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (typeof requestAnimationFrame !== 'undefined') {
                requestAnimationFrame((/**
                 * @return {?}
                 */
                () => this._scrollToCaretPosition(textarea)));
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                () => this._scrollToCaretPosition(textarea)));
            }
        }));
        this._previousValue = value;
        this._previousMinRows = this._minRows;
    }
    /**
     * Resets the textarea to its original size
     * @return {?}
     */
    reset() {
        // Do not try to change the textarea, if the initialHeight has not been determined yet
        // This might potentially remove styles when reset() is called before ngAfterViewInit
        if (this._initialHeight !== undefined) {
            this._textareaElement.style.height = this._initialHeight;
        }
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    /**
     * @return {?}
     */
    _noopInputHandler() {
        // no-op handler that ensures we're running change detection on input events.
    }
    /**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     * @private
     * @param {?} textarea
     * @return {?}
     */
    _scrollToCaretPosition(textarea) {
        const { selectionStart, selectionEnd } = textarea;
        // IE will throw an "Unspecified error" if we try to set the selection range after the
        // element has been removed from the DOM. Assert that the directive hasn't been destroyed
        // between the time we requested the animation frame and when it was executed.
        // Also note that we have to assert that the textarea is focused before we set the
        // selection range. Setting the selection range on a non-focused textarea will cause
        // it to receive focus on IE and Edge.
        if (!this._destroyed.isStopped && document.activeElement === textarea) {
            textarea.setSelectionRange(selectionStart, selectionEnd);
        }
    }
}
CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) { return new (t || CdkTextareaAutosize)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
CdkTextareaAutosize.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkTextareaAutosize, selectors: [["textarea", "cdkTextareaAutosize", ""]], hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"], hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("input", function CdkTextareaAutosize_input_HostBindingHandler() { return ctx._noopInputHandler(); });
    } }, inputs: { minRows: ["cdkAutosizeMinRows", "minRows"], maxRows: ["cdkAutosizeMaxRows", "maxRows"], enabled: ["cdkTextareaAutosize", "enabled"] }, exportAs: ["cdkTextareaAutosize"] });
/** @nocollapse */
CdkTextareaAutosize.ctorParameters = () => [
    { type: ElementRef },
    { type: Platform },
    { type: NgZone }
];
CdkTextareaAutosize.propDecorators = {
    minRows: [{ type: Input, args: ['cdkAutosizeMinRows',] }],
    maxRows: [{ type: Input, args: ['cdkAutosizeMaxRows',] }],
    enabled: [{ type: Input, args: ['cdkTextareaAutosize',] }],
    _noopInputHandler: [{ type: HostListener, args: ['input',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTextareaAutosize, [{
        type: Directive,
        args: [{
                selector: 'textarea[cdkTextareaAutosize]',
                exportAs: 'cdkTextareaAutosize',
                host: {
                    'class': 'cdk-textarea-autosize',
                    // Textarea elements that have the directive applied should have a single row by default.
                    // Browsers normally show two rows by default and therefore this limits the minRows binding.
                    'rows': '1'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.Platform }, { type: ɵngcc0.NgZone }]; }, { minRows: [{
            type: Input,
            args: ['cdkAutosizeMinRows']
        }], maxRows: [{
            type: Input,
            args: ['cdkAutosizeMaxRows']
        }], enabled: [{
            type: Input,
            args: ['cdkTextareaAutosize']
        }], _noopInputHandler: [{
            type: HostListener,
            args: ['input']
        }] }); })();
if (false) {
    /** @type {?} */
    CdkTextareaAutosize.ngAcceptInputType_minRows;
    /** @type {?} */
    CdkTextareaAutosize.ngAcceptInputType_maxRows;
    /** @type {?} */
    CdkTextareaAutosize.ngAcceptInputType_enabled;
    /**
     * Keep track of the previous textarea value to avoid resizing when the value hasn't changed.
     * @type {?}
     * @private
     */
    CdkTextareaAutosize.prototype._previousValue;
    /**
     * @type {?}
     * @private
     */
    CdkTextareaAutosize.prototype._initialHeight;
    /**
     * @type {?}
     * @private
     */
    CdkTextareaAutosize.prototype._destroyed;
    /**
     * @type {?}
     * @private
     */
    CdkTextareaAutosize.prototype._minRows;
    /**
     * @type {?}
     * @private
     */
    CdkTextareaAutosize.prototype._maxRows;
    /**
     * @type {?}
     * @private
     */
    CdkTextareaAutosize.prototype._enabled;
    /**
     * Value of minRows as of last resize. If the minRows has decreased, the
     * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
     * does not have the same problem because it does not affect the textarea's scrollHeight.
     * @type {?}
     * @private
     */
    CdkTextareaAutosize.prototype._previousMinRows;
    /**
     * @type {?}
     * @private
     */
    CdkTextareaAutosize.prototype._textareaElement;
    /**
     * Cached height of a textarea with a single row.
     * @type {?}
     * @private
     */
    CdkTextareaAutosize.prototype._cachedLineHeight;
    /**
     * @type {?}
     * @private
     */
    CdkTextareaAutosize.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    CdkTextareaAutosize.prototype._platform;
    /**
     * @type {?}
     * @private
     */
    CdkTextareaAutosize.prototype._ngZone;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NpemUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvdGV4dC1maWVsZC9hdXRvc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUVyQixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFJTCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3hDO0FBRUU7QUFBb0U7OztBQVd0RSxNQUFNLE9BQU8sbUJBQW1CO0FBQUc7QUFBUTtBQUE4QjtBQUNwRDtBQUEwQjtBQUFRLElBa0RyRCxZQUNVLFdBQW9DLEVBQ3BDLFNBQW1CLEVBQ25CLE9BQWU7QUFDM0IsUUFIWSxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7QUFBQyxRQUNyQyxjQUFTLEdBQVQsU0FBUyxDQUFVO0FBQUMsUUFDcEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtBQUFDLFFBbERULGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQ3BELFFBR1UsYUFBUSxHQUFZLElBQUksQ0FBQztBQUNuQztBQUVLO0FBQ007QUFDTTtBQUVBO0FBQVksUUFBbkIscUJBQWdCLEdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDeEMsUUF1Q0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHLG1CQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUF1QixDQUFDO0FBQ2xGLElBQUUsQ0FBQztBQUNIO0FBQ087QUFBK0M7QUFBbUI7QUFDbkUsSUF2Q0osSUFDSSxPQUFP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dUNBQWlDO0FBQ25DO0FBRUM7QUFDRTtBQUNFO0FBRUo7QUFBaUI7QUFBZ0I7QUFFbEMsSUFGRSwrQ0FBc0M7QUFDeEM7QUFDTztBQUFpQjtBQUFnQjtBQUFRLElBQTlDLCtDQUE4QztBQUNoRDtBQUNPO0FBQ0s7QUFBaUI7QUFDZjtBQUFRLElBNEJwQixnREFBa0M7QUFDcEM7QUFDTztBQUNFO0FBQWdCO0FBQVEsSUFBN0IsMENBQTRDO0FBQUM7QUFDMUM7QUFBaUI7QUFDakI7QUFBUSxJQURYLHdDQUEyQjtBQUFDO0FBQ3pCO0FBQWlCO0FBQ2Y7QUFBUSxJQURiLHNDQUF1QjtBQUFDO0FBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgQm9vbGVhbklucHV0LFxuICBjb2VyY2VCb29sZWFuUHJvcGVydHksXG4gIGNvZXJjZU51bWJlclByb3BlcnR5LFxuICBOdW1iZXJJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRG9DaGVjayxcbiAgT25EZXN0cm95LFxuICBOZ1pvbmUsXG4gIEhvc3RMaXN0ZW5lcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHthdWRpdFRpbWUsIHRha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtmcm9tRXZlbnQsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5cbi8qKiBEaXJlY3RpdmUgdG8gYXV0b21hdGljYWxseSByZXNpemUgYSB0ZXh0YXJlYSB0byBmaXQgaXRzIGNvbnRlbnQuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYVtjZGtUZXh0YXJlYUF1dG9zaXplXScsXG4gIGV4cG9ydEFzOiAnY2RrVGV4dGFyZWFBdXRvc2l6ZScsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnY2RrLXRleHRhcmVhLWF1dG9zaXplJyxcbiAgICAvLyBUZXh0YXJlYSBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIGRpcmVjdGl2ZSBhcHBsaWVkIHNob3VsZCBoYXZlIGEgc2luZ2xlIHJvdyBieSBkZWZhdWx0LlxuICAgIC8vIEJyb3dzZXJzIG5vcm1hbGx5IHNob3cgdHdvIHJvd3MgYnkgZGVmYXVsdCBhbmQgdGhlcmVmb3JlIHRoaXMgbGltaXRzIHRoZSBtaW5Sb3dzIGJpbmRpbmcuXG4gICAgJ3Jvd3MnOiAnMScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENka1RleHRhcmVhQXV0b3NpemUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBEb0NoZWNrLCBPbkRlc3Ryb3kge1xuICAvKiogS2VlcCB0cmFjayBvZiB0aGUgcHJldmlvdXMgdGV4dGFyZWEgdmFsdWUgdG8gYXZvaWQgcmVzaXppbmcgd2hlbiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQuICovXG4gIHByaXZhdGUgX3ByZXZpb3VzVmFsdWU/OiBzdHJpbmc7XG4gIHByaXZhdGUgX2luaXRpYWxIZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIF9taW5Sb3dzOiBudW1iZXI7XG4gIHByaXZhdGUgX21heFJvd3M6IG51bWJlcjtcbiAgcHJpdmF0ZSBfZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFZhbHVlIG9mIG1pblJvd3MgYXMgb2YgbGFzdCByZXNpemUuIElmIHRoZSBtaW5Sb3dzIGhhcyBkZWNyZWFzZWQsIHRoZVxuICAgKiBoZWlnaHQgb2YgdGhlIHRleHRhcmVhIG5lZWRzIHRvIGJlIHJlY29tcHV0ZWQgdG8gcmVmbGVjdCB0aGUgbmV3IG1pbmltdW0uIFRoZSBtYXhIZWlnaHRcbiAgICogZG9lcyBub3QgaGF2ZSB0aGUgc2FtZSBwcm9ibGVtIGJlY2F1c2UgaXQgZG9lcyBub3QgYWZmZWN0IHRoZSB0ZXh0YXJlYSdzIHNjcm9sbEhlaWdodC5cbiAgICovXG4gIHByaXZhdGUgX3ByZXZpb3VzTWluUm93czogbnVtYmVyID0gLTE7XG5cbiAgcHJpdmF0ZSBfdGV4dGFyZWFFbGVtZW50OiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuXG4gIC8qKiBNaW5pbXVtIGFtb3VudCBvZiByb3dzIGluIHRoZSB0ZXh0YXJlYS4gKi9cbiAgQElucHV0KCdjZGtBdXRvc2l6ZU1pblJvd3MnKVxuICBnZXQgbWluUm93cygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fbWluUm93czsgfVxuICBzZXQgbWluUm93cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluUm93cyA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLl9zZXRNaW5IZWlnaHQoKTtcbiAgfVxuXG4gIC8qKiBNYXhpbXVtIGFtb3VudCBvZiByb3dzIGluIHRoZSB0ZXh0YXJlYS4gKi9cbiAgQElucHV0KCdjZGtBdXRvc2l6ZU1heFJvd3MnKVxuICBnZXQgbWF4Um93cygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fbWF4Um93czsgfVxuICBzZXQgbWF4Um93cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWF4Um93cyA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLl9zZXRNYXhIZWlnaHQoKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIGF1dG9zaXppbmcgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgQElucHV0KCdjZGtUZXh0YXJlYUF1dG9zaXplJylcbiAgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9lbmFibGVkOyB9XG4gIHNldCBlbmFibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdmFsdWUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuXG4gICAgLy8gT25seSBhY3QgaWYgdGhlIGFjdHVhbCB2YWx1ZSBjaGFuZ2VkLiBUaGlzIHNwZWNpZmljYWxseSBoZWxwcyB0byBub3QgcnVuXG4gICAgLy8gcmVzaXplVG9GaXRDb250ZW50IHRvbyBlYXJseSAoaS5lLiBiZWZvcmUgbmdBZnRlclZpZXdJbml0KVxuICAgIGlmICh0aGlzLl9lbmFibGVkICE9PSB2YWx1ZSkge1xuICAgICAgKHRoaXMuX2VuYWJsZWQgPSB2YWx1ZSkgPyB0aGlzLnJlc2l6ZVRvRml0Q29udGVudCh0cnVlKSA6IHRoaXMucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2FjaGVkIGhlaWdodCBvZiBhIHRleHRhcmVhIHdpdGggYSBzaW5nbGUgcm93LiAqL1xuICBwcml2YXRlIF9jYWNoZWRMaW5lSGVpZ2h0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBfcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5fdGV4dGFyZWFFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgbWluaW11bSBoZWlnaHQgb2YgdGhlIHRleHRhcmVhIGFzIGRldGVybWluZWQgYnkgbWluUm93cy4gKi9cbiAgX3NldE1pbkhlaWdodCgpOiB2b2lkIHtcbiAgICBjb25zdCBtaW5IZWlnaHQgPSB0aGlzLm1pblJvd3MgJiYgdGhpcy5fY2FjaGVkTGluZUhlaWdodCA/XG4gICAgICAgIGAke3RoaXMubWluUm93cyAqIHRoaXMuX2NhY2hlZExpbmVIZWlnaHR9cHhgIDogbnVsbDtcblxuICAgIGlmIChtaW5IZWlnaHQpICB7XG4gICAgICB0aGlzLl90ZXh0YXJlYUVsZW1lbnQuc3R5bGUubWluSGVpZ2h0ID0gbWluSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBtYXhpbXVtIGhlaWdodCBvZiB0aGUgdGV4dGFyZWEgYXMgZGV0ZXJtaW5lZCBieSBtYXhSb3dzLiAqL1xuICBfc2V0TWF4SGVpZ2h0KCk6IHZvaWQge1xuICAgIGNvbnN0IG1heEhlaWdodCA9IHRoaXMubWF4Um93cyAmJiB0aGlzLl9jYWNoZWRMaW5lSGVpZ2h0ID9cbiAgICAgICAgYCR7dGhpcy5tYXhSb3dzICogdGhpcy5fY2FjaGVkTGluZUhlaWdodH1weGAgOiBudWxsO1xuXG4gICAgaWYgKG1heEhlaWdodCkge1xuICAgICAgdGhpcy5fdGV4dGFyZWFFbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IG1heEhlaWdodDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgLy8gUmVtZW1iZXIgdGhlIGhlaWdodCB3aGljaCB3ZSBzdGFydGVkIHdpdGggaW4gY2FzZSBhdXRvc2l6aW5nIGlzIGRpc2FibGVkXG4gICAgICB0aGlzLl9pbml0aWFsSGVpZ2h0ID0gdGhpcy5fdGV4dGFyZWFFbGVtZW50LnN0eWxlLmhlaWdodDtcblxuICAgICAgdGhpcy5yZXNpemVUb0ZpdENvbnRlbnQoKTtcblxuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAgICAgLnBpcGUoYXVkaXRUaW1lKDE2KSwgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlc2l6ZVRvRml0Q29udGVudCh0cnVlKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhY2hlIHRoZSBoZWlnaHQgb2YgYSBzaW5nbGUtcm93IHRleHRhcmVhIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuIGNhY2hlZC5cbiAgICpcbiAgICogV2UgbmVlZCB0byBrbm93IGhvdyBsYXJnZSBhIHNpbmdsZSBcInJvd1wiIG9mIGEgdGV4dGFyZWEgaXMgaW4gb3JkZXIgdG8gYXBwbHkgbWluUm93cyBhbmRcbiAgICogbWF4Um93cy4gRm9yIHRoZSBpbml0aWFsIHZlcnNpb24sIHdlIHdpbGwgYXNzdW1lIHRoYXQgdGhlIGhlaWdodCBvZiBhIHNpbmdsZSBsaW5lIGluIHRoZVxuICAgKiB0ZXh0YXJlYSBkb2VzIG5vdCBldmVyIGNoYW5nZS5cbiAgICovXG4gIHByaXZhdGUgX2NhY2hlVGV4dGFyZWFMaW5lSGVpZ2h0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9jYWNoZWRMaW5lSGVpZ2h0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVXNlIGEgY2xvbmUgZWxlbWVudCBiZWNhdXNlIHdlIGhhdmUgdG8gb3ZlcnJpZGUgc29tZSBzdHlsZXMuXG4gICAgbGV0IHRleHRhcmVhQ2xvbmUgPSB0aGlzLl90ZXh0YXJlYUVsZW1lbnQuY2xvbmVOb2RlKGZhbHNlKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIHRleHRhcmVhQ2xvbmUucm93cyA9IDE7XG5cbiAgICAvLyBVc2UgYHBvc2l0aW9uOiBhYnNvbHV0ZWAgc28gdGhhdCB0aGlzIGRvZXNuJ3QgY2F1c2UgYSBicm93c2VyIGxheW91dCBhbmQgdXNlXG4gICAgLy8gYHZpc2liaWxpdHk6IGhpZGRlbmAgc28gdGhhdCBub3RoaW5nIGlzIHJlbmRlcmVkLiBDbGVhciBhbnkgb3RoZXIgc3R5bGVzIHRoYXRcbiAgICAvLyB3b3VsZCBhZmZlY3QgdGhlIGhlaWdodC5cbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLm1pbkhlaWdodCA9ICcnO1xuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG5cbiAgICAvLyBJbiBGaXJlZm94IGl0IGhhcHBlbnMgdGhhdCB0ZXh0YXJlYSBlbGVtZW50cyBhcmUgYWx3YXlzIGJpZ2dlciB0aGFuIHRoZSBzcGVjaWZpZWQgYW1vdW50XG4gICAgLy8gb2Ygcm93cy4gVGhpcyBpcyBiZWNhdXNlIEZpcmVmb3ggdHJpZXMgdG8gYWRkIGV4dHJhIHNwYWNlIGZvciB0aGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIuXG4gICAgLy8gQXMgYSB3b3JrYXJvdW5kIHRoYXQgcmVtb3ZlcyB0aGUgZXh0cmEgc3BhY2UgZm9yIHRoZSBzY3JvbGxiYXIsIHdlIGNhbiBqdXN0IHNldCBvdmVyZmxvd1xuICAgIC8vIHRvIGhpZGRlbi4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlcmUgaXMgbm8gaW52YWxpZCBjYWxjdWxhdGlvbiBvZiB0aGUgbGluZSBoZWlnaHQuXG4gICAgLy8gU2VlIEZpcmVmb3ggYnVnIHJlcG9ydDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MzM2NTRcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICB0aGlzLl90ZXh0YXJlYUVsZW1lbnQucGFyZW50Tm9kZSEuYXBwZW5kQ2hpbGQodGV4dGFyZWFDbG9uZSk7XG4gICAgdGhpcy5fY2FjaGVkTGluZUhlaWdodCA9IHRleHRhcmVhQ2xvbmUuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMuX3RleHRhcmVhRWxlbWVudC5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZCh0ZXh0YXJlYUNsb25lKTtcblxuICAgIC8vIE1pbiBhbmQgbWF4IGhlaWdodHMgaGF2ZSB0byBiZSByZS1jYWxjdWxhdGVkIGlmIHRoZSBjYWNoZWQgbGluZSBoZWlnaHQgY2hhbmdlc1xuICAgIHRoaXMuX3NldE1pbkhlaWdodCgpO1xuICAgIHRoaXMuX3NldE1heEhlaWdodCgpO1xuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICh0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMucmVzaXplVG9GaXRDb250ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2l6ZSB0aGUgdGV4dGFyZWEgdG8gZml0IGl0cyBjb250ZW50LlxuICAgKiBAcGFyYW0gZm9yY2UgV2hldGhlciB0byBmb3JjZSBhIGhlaWdodCByZWNhbGN1bGF0aW9uLiBCeSBkZWZhdWx0IHRoZSBoZWlnaHQgd2lsbCBiZVxuICAgKiAgICByZWNhbGN1bGF0ZWQgb25seSBpZiB0aGUgdmFsdWUgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBjYWxsLlxuICAgKi9cbiAgcmVzaXplVG9GaXRDb250ZW50KGZvcmNlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAvLyBJZiBhdXRvc2l6aW5nIGlzIGRpc2FibGVkLCBqdXN0IHNraXAgZXZlcnl0aGluZyBlbHNlXG4gICAgaWYgKCF0aGlzLl9lbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fY2FjaGVUZXh0YXJlYUxpbmVIZWlnaHQoKTtcblxuICAgIC8vIElmIHdlIGhhdmVuJ3QgZGV0ZXJtaW5lZCB0aGUgbGluZS1oZWlnaHQgeWV0LCB3ZSBrbm93IHdlJ3JlIHN0aWxsIGhpZGRlbiBhbmQgdGhlcmUncyBubyBwb2ludFxuICAgIC8vIGluIGNoZWNraW5nIHRoZSBoZWlnaHQgb2YgdGhlIHRleHRhcmVhLlxuICAgIGlmICghdGhpcy5fY2FjaGVkTGluZUhlaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgY29uc3QgdmFsdWUgPSB0ZXh0YXJlYS52YWx1ZTtcblxuICAgIC8vIE9ubHkgcmVzaXplIGlmIHRoZSB2YWx1ZSBvciBtaW5Sb3dzIGhhdmUgY2hhbmdlZCBzaW5jZSB0aGVzZSBjYWxjdWxhdGlvbnMgY2FuIGJlIGV4cGVuc2l2ZS5cbiAgICBpZiAoIWZvcmNlICYmIHRoaXMuX21pblJvd3MgPT09IHRoaXMuX3ByZXZpb3VzTWluUm93cyAmJiB2YWx1ZSA9PT0gdGhpcy5fcHJldmlvdXNWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlaG9sZGVyVGV4dCA9IHRleHRhcmVhLnBsYWNlaG9sZGVyO1xuXG4gICAgLy8gUmVzZXQgdGhlIHRleHRhcmVhIGhlaWdodCB0byBhdXRvIGluIG9yZGVyIHRvIHNocmluayBiYWNrIHRvIGl0cyBkZWZhdWx0IHNpemUuXG4gICAgLy8gQWxzbyB0ZW1wb3JhcmlseSBmb3JjZSBvdmVyZmxvdzpoaWRkZW4sIHNvIHNjcm9sbCBiYXJzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCBjYWxjdWxhdGlvbnMuXG4gICAgLy8gTG9uZyBwbGFjZWhvbGRlcnMgdGhhdCBhcmUgd2lkZXIgdGhhbiB0aGUgdGV4dGFyZWEgd2lkdGggbWF5IGxlYWQgdG8gYSBiaWdnZXIgc2Nyb2xsSGVpZ2h0XG4gICAgLy8gdmFsdWUuIFRvIGVuc3VyZSB0aGF0IHRoZSBzY3JvbGxIZWlnaHQgaXMgbm90IGJpZ2dlciB0aGFuIHRoZSBjb250ZW50LCB0aGUgcGxhY2Vob2xkZXJzXG4gICAgLy8gbmVlZCB0byBiZSByZW1vdmVkIHRlbXBvcmFyaWx5LlxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoJ2Nkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcnKTtcbiAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9ICcnO1xuXG4gICAgLy8gVGhlIGNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcgY2xhc3MgaW5jbHVkZXMgYSAycHggcGFkZGluZyB0byB3b3JrYXJvdW5kIGFuIGlzc3VlIHdpdGhcbiAgICAvLyBDaHJvbWUsIHNvIHdlIGFjY291bnQgZm9yIHRoYXQgZXh0cmEgc3BhY2UgaGVyZSBieSBzdWJ0cmFjdGluZyA0ICgycHggdG9wICsgMnB4IGJvdHRvbSkuXG4gICAgY29uc3QgaGVpZ2h0ID0gdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0IC0gNDtcblxuICAgIC8vIFVzZSB0aGUgc2Nyb2xsSGVpZ2h0IHRvIGtub3cgaG93IGxhcmdlIHRoZSB0ZXh0YXJlYSAqd291bGQqIGJlIGlmIGZpdCBpdHMgZW50aXJlIHZhbHVlLlxuICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgdGV4dGFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZycpO1xuICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJUZXh0O1xuXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5fc2Nyb2xsVG9DYXJldFBvc2l0aW9uKHRleHRhcmVhKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3Njcm9sbFRvQ2FyZXRQb3NpdGlvbih0ZXh0YXJlYSkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX3ByZXZpb3VzTWluUm93cyA9IHRoaXMuX21pblJvd3M7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSB0ZXh0YXJlYSB0byBpdHMgb3JpZ2luYWwgc2l6ZVxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgLy8gRG8gbm90IHRyeSB0byBjaGFuZ2UgdGhlIHRleHRhcmVhLCBpZiB0aGUgaW5pdGlhbEhlaWdodCBoYXMgbm90IGJlZW4gZGV0ZXJtaW5lZCB5ZXRcbiAgICAvLyBUaGlzIG1pZ2h0IHBvdGVudGlhbGx5IHJlbW92ZSBzdHlsZXMgd2hlbiByZXNldCgpIGlzIGNhbGxlZCBiZWZvcmUgbmdBZnRlclZpZXdJbml0XG4gICAgaWYgKHRoaXMuX2luaXRpYWxIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdGV4dGFyZWFFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuX2luaXRpYWxIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSW4gSXZ5IHRoZSBgaG9zdGAgbWV0YWRhdGEgd2lsbCBiZSBtZXJnZWQsIHdoZXJlYXMgaW4gVmlld0VuZ2luZSBpdCBpcyBvdmVycmlkZGVuLiBJbiBvcmRlclxuICAvLyB0byBhdm9pZCBkb3VibGUgZXZlbnQgbGlzdGVuZXJzLCB3ZSBuZWVkIHRvIHVzZSBgSG9zdExpc3RlbmVyYC4gT25jZSBJdnkgaXMgdGhlIGRlZmF1bHQsIHdlXG4gIC8vIGNhbiBtb3ZlIHRoaXMgYmFjayBpbnRvIGBob3N0YC5cbiAgLy8gdHNsaW50OmRpc2FibGU6bm8taG9zdC1kZWNvcmF0b3ItaW4tY29uY3JldGVcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKVxuICBfbm9vcElucHV0SGFuZGxlcigpIHtcbiAgICAvLyBuby1vcCBoYW5kbGVyIHRoYXQgZW5zdXJlcyB3ZSdyZSBydW5uaW5nIGNoYW5nZSBkZXRlY3Rpb24gb24gaW5wdXQgZXZlbnRzLlxuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgYSB0ZXh0YXJlYSB0byB0aGUgY2FyZXQgcG9zaXRpb24uIE9uIEZpcmVmb3ggcmVzaXppbmcgdGhlIHRleHRhcmVhIHdpbGxcbiAgICogcHJldmVudCBpdCBmcm9tIHNjcm9sbGluZyB0byB0aGUgY2FyZXQgcG9zaXRpb24uIFdlIG5lZWQgdG8gcmUtc2V0IHRoZSBzZWxlY3Rpb25cbiAgICogaW4gb3JkZXIgZm9yIGl0IHRvIHNjcm9sbCB0byB0aGUgcHJvcGVyIHBvc2l0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBfc2Nyb2xsVG9DYXJldFBvc2l0aW9uKHRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgY29uc3Qge3NlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmR9ID0gdGV4dGFyZWE7XG5cbiAgICAvLyBJRSB3aWxsIHRocm93IGFuIFwiVW5zcGVjaWZpZWQgZXJyb3JcIiBpZiB3ZSB0cnkgdG8gc2V0IHRoZSBzZWxlY3Rpb24gcmFuZ2UgYWZ0ZXIgdGhlXG4gICAgLy8gZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIERPTS4gQXNzZXJ0IHRoYXQgdGhlIGRpcmVjdGl2ZSBoYXNuJ3QgYmVlbiBkZXN0cm95ZWRcbiAgICAvLyBiZXR3ZWVuIHRoZSB0aW1lIHdlIHJlcXVlc3RlZCB0aGUgYW5pbWF0aW9uIGZyYW1lIGFuZCB3aGVuIGl0IHdhcyBleGVjdXRlZC5cbiAgICAvLyBBbHNvIG5vdGUgdGhhdCB3ZSBoYXZlIHRvIGFzc2VydCB0aGF0IHRoZSB0ZXh0YXJlYSBpcyBmb2N1c2VkIGJlZm9yZSB3ZSBzZXQgdGhlXG4gICAgLy8gc2VsZWN0aW9uIHJhbmdlLiBTZXR0aW5nIHRoZSBzZWxlY3Rpb24gcmFuZ2Ugb24gYSBub24tZm9jdXNlZCB0ZXh0YXJlYSB3aWxsIGNhdXNlXG4gICAgLy8gaXQgdG8gcmVjZWl2ZSBmb2N1cyBvbiBJRSBhbmQgRWRnZS5cbiAgICBpZiAoIXRoaXMuX2Rlc3Ryb3llZC5pc1N0b3BwZWQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGV4dGFyZWEpIHtcbiAgICAgIHRleHRhcmVhLnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9taW5Sb3dzOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21heFJvd3M6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW5hYmxlZDogQm9vbGVhbklucHV0O1xufVxuIl19