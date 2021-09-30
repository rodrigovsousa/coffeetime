/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/observers/observe-content.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty, coerceNumberProperty, coerceElement } from '@angular/cdk/coercion';
import { Directive, ElementRef, EventEmitter, Injectable, Input, NgModule, NgZone, Output, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * \@docs-private
 */
import * as ɵngcc0 from '@angular/core';
export class MutationObserverFactory {
    /**
     * @param {?} callback
     * @return {?}
     */
    create(callback) {
        return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
    }
}
MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) { return new (t || MutationObserverFactory)(); };
/** @nocollapse */ MutationObserverFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function MutationObserverFactory_Factory() { return new MutationObserverFactory(); }, token: MutationObserverFactory, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MutationObserverFactory, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/**
 * An injectable service that allows watching elements for changes to their content.
 */
export class ContentObserver {
    /**
     * @param {?} _mutationObserverFactory
     */
    constructor(_mutationObserverFactory) {
        this._mutationObserverFactory = _mutationObserverFactory;
        /**
         * Keeps track of the existing MutationObservers so they can be reused.
         */
        this._observedElements = new Map();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._observedElements.forEach((/**
         * @param {?} _
         * @param {?} element
         * @return {?}
         */
        (_, element) => this._cleanupObserver(element)));
    }
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    observe(elementOrRef) {
        /** @type {?} */
        const element = coerceElement(elementOrRef);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const stream = this._observeElement(element);
            /** @type {?} */
            const subscription = stream.subscribe(observer);
            return (/**
             * @return {?}
             */
            () => {
                subscription.unsubscribe();
                this._unobserveElement(element);
            });
        }));
    }
    /**
     * Observes the given element by using the existing MutationObserver if available, or creating a
     * new one if not.
     * @private
     * @param {?} element
     * @return {?}
     */
    _observeElement(element) {
        if (!this._observedElements.has(element)) {
            /** @type {?} */
            const stream = new Subject();
            /** @type {?} */
            const observer = this._mutationObserverFactory.create((/**
             * @param {?} mutations
             * @return {?}
             */
            mutations => stream.next(mutations)));
            if (observer) {
                observer.observe(element, {
                    characterData: true,
                    childList: true,
                    subtree: true
                });
            }
            this._observedElements.set(element, { observer, stream, count: 1 });
        }
        else {
            (/** @type {?} */ (this._observedElements.get(element))).count++;
        }
        return (/** @type {?} */ (this._observedElements.get(element))).stream;
    }
    /**
     * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
     * observing this element.
     * @private
     * @param {?} element
     * @return {?}
     */
    _unobserveElement(element) {
        if (this._observedElements.has(element)) {
            (/** @type {?} */ (this._observedElements.get(element))).count--;
            if (!(/** @type {?} */ (this._observedElements.get(element))).count) {
                this._cleanupObserver(element);
            }
        }
    }
    /**
     * Clean up the underlying MutationObserver for the specified element.
     * @private
     * @param {?} element
     * @return {?}
     */
    _cleanupObserver(element) {
        if (this._observedElements.has(element)) {
            const { observer, stream } = (/** @type {?} */ (this._observedElements.get(element)));
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this._observedElements.delete(element);
        }
    }
}
ContentObserver.ɵfac = function ContentObserver_Factory(t) { return new (t || ContentObserver)(ɵngcc0.ɵɵinject(MutationObserverFactory)); };
/** @nocollapse */
ContentObserver.ctorParameters = () => [
    { type: MutationObserverFactory }
];
/** @nocollapse */ ContentObserver.ɵprov = i0.ɵɵdefineInjectable({ factory: function ContentObserver_Factory() { return new ContentObserver(i0.ɵɵinject(MutationObserverFactory)); }, token: ContentObserver, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ContentObserver, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MutationObserverFactory }]; }, null); })();
if (false) {
    /**
     * Keeps track of the existing MutationObservers so they can be reused.
     * @type {?}
     * @private
     */
    ContentObserver.prototype._observedElements;
    /**
     * @type {?}
     * @private
     */
    ContentObserver.prototype._mutationObserverFactory;
}
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */
export class CdkObserveContent {
    /**
     * @param {?} _contentObserver
     * @param {?} _elementRef
     * @param {?} _ngZone
     */
    constructor(_contentObserver, _elementRef, _ngZone) {
        this._contentObserver = _contentObserver;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * Event emitted for each change in the element's content.
         */
        this.event = new EventEmitter();
        this._disabled = false;
        this._currentSubscription = null;
    }
    /**
     * Whether observing content is disabled. This option can be used
     * to disconnect the underlying MutationObserver until it is needed.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this._disabled ? this._unsubscribe() : this._subscribe();
    }
    /**
     * Debounce interval for emitting the changes.
     * @return {?}
     */
    get debounce() { return this._debounce; }
    /**
     * @param {?} value
     * @return {?}
     */
    set debounce(value) {
        this._debounce = coerceNumberProperty(value);
        this._subscribe();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this._currentSubscription && !this.disabled) {
            this._subscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._unsubscribe();
    }
    /**
     * @private
     * @return {?}
     */
    _subscribe() {
        this._unsubscribe();
        /** @type {?} */
        const stream = this._contentObserver.observe(this._elementRef);
        // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
        // Consider brining it back inside the zone next time we're making breaking changes.
        // Bringing it back inside can cause things like infinite change detection loops and changed
        // after checked errors if people's code isn't handling it properly.
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._currentSubscription =
                (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _unsubscribe() {
        if (this._currentSubscription) {
            this._currentSubscription.unsubscribe();
        }
    }
}
CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) { return new (t || CdkObserveContent)(ɵngcc0.ɵɵdirectiveInject(ContentObserver), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.NgZone)); };
CdkObserveContent.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkObserveContent, selectors: [["", "cdkObserveContent", ""]], inputs: { disabled: ["cdkObserveContentDisabled", "disabled"], debounce: "debounce" }, outputs: { event: "cdkObserveContent" }, exportAs: ["cdkObserveContent"] });
/** @nocollapse */
CdkObserveContent.ctorParameters = () => [
    { type: ContentObserver },
    { type: ElementRef },
    { type: NgZone }
];
CdkObserveContent.propDecorators = {
    event: [{ type: Output, args: ['cdkObserveContent',] }],
    disabled: [{ type: Input, args: ['cdkObserveContentDisabled',] }],
    debounce: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkObserveContent, [{
        type: Directive,
        args: [{
                selector: '[cdkObserveContent]',
                exportAs: 'cdkObserveContent'
            }]
    }], function () { return [{ type: ContentObserver }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.NgZone }]; }, { event: [{
            type: Output,
            args: ['cdkObserveContent']
        }], disabled: [{
            type: Input,
            args: ['cdkObserveContentDisabled']
        }], debounce: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    CdkObserveContent.ngAcceptInputType_disabled;
    /** @type {?} */
    CdkObserveContent.ngAcceptInputType_debounce;
    /**
     * Event emitted for each change in the element's content.
     * @type {?}
     */
    CdkObserveContent.prototype.event;
    /**
     * @type {?}
     * @private
     */
    CdkObserveContent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    CdkObserveContent.prototype._debounce;
    /**
     * @type {?}
     * @private
     */
    CdkObserveContent.prototype._currentSubscription;
    /**
     * @type {?}
     * @private
     */
    CdkObserveContent.prototype._contentObserver;
    /**
     * @type {?}
     * @private
     */
    CdkObserveContent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    CdkObserveContent.prototype._ngZone;
}
export class ObserversModule {
}
ObserversModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ObserversModule });
ObserversModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ObserversModule_Factory(t) { return new (t || ObserversModule)(); }, providers: [MutationObserverFactory] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ObserversModule, { declarations: [CdkObserveContent], exports: [CdkObserveContent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ObserversModule, [{
        type: NgModule,
        args: [{
                exports: [CdkObserveContent],
                declarations: [CdkObserveContent],
                providers: [MutationObserverFactory]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2ZS1jb250ZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL29ic2VydmVycy9vYnNlcnZlLWNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIsYUFBYSxFQUVkLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sRUFFTixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFVBQVUsRUFBRSxPQUFPLEVBQXlCLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QztBQUVnQztBQUFJO0FBR3JCO0FBQWtCOztBQUNqQyxNQUFNLE9BQU8sdUJBQXVCO0FBQ3BDO0FBQVE7QUFBMkI7QUFBbUI7QUFBUSxJQUE1RCxNQUFNLENBQUMsUUFBMEI7QUFBSSxRQUNuQyxPQUFPLE9BQU8sZ0JBQWdCLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0YsSUFBRSxDQUFDO0FBQ0g7bURBTEMsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxnQ0FDM0I7QUFBQzs7OzswQkFPcUI7QUFBQztBQUFJO0FBQ0o7QUFDNUIsTUFBTSxPQUFPLGVBQWU7QUFBRztBQUFRO0FBQ1Q7QUFBUSxJQU9wQyxZQUFvQix3QkFBaUQ7QUFBSSxRQUFyRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQXlCO0FBQUM7QUFFakU7QUFDOEQ7QUFBWSxRQVR2RSxzQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFJL0IsQ0FBQztBQUNQLElBQzBFLENBQUM7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TUFBTSxTQUFDLG1CQUFtQjtBQUFPLHVCQU1qQyxLQUFLLFNBQUMsMkJBQTJCO0FBQy9CLHVCQVFGLEtBQUs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUM7QUFBYTtBQUFxQixJQTJDcEMsNkNBQWdEO0FBQ2xEO0FBQXFCLElBQW5CLDZDQUFnRDtBQUNsRDtBQUdJO0FBRW1CO0FBQ3BCO0FBQVEsSUFuRVQsa0NBQTBFO0FBQzVFO0FBRUM7QUFBaUI7QUFBZ0I7QUFBUSxJQVN4QyxzQ0FBMEI7QUFDNUI7QUFDTztBQUFpQjtBQUFnQjtBQUFRLElBTzlDLHNDQUEwQjtBQUM1QjtBQUNPO0FBQWlCO0FBQWdCO0FBQVEsSUFBOUMsaURBQXlEO0FBQzNEO0FBQ087QUFBaUI7QUFBZ0I7QUFBUSxJQUFsQyw2Q0FBeUM7QUFBQztBQUNqRDtBQUFpQjtBQUFnQjtBQUFRLElBQWxDLHdDQUE0QztBQUFDO0FBQ3BEO0FBQWlCO0FBQWdCO0FBRW5DLElBRlMsb0NBQXVCO0FBQUM7QUEwQ3RDLE1BQU0sT0FBTyxlQUFlO0FBQUc7MkNBTDlCLFFBQVEsU0FBQztHQUNSLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDLGtCQUM1QixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxrQkFDakMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUMsY0FDckM7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSxcbiAgY29lcmNlTnVtYmVyUHJvcGVydHksXG4gIGNvZXJjZUVsZW1lbnQsXG4gIEJvb2xlYW5JbnB1dFxufSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdGFibGUsXG4gIElucHV0LFxuICBOZ01vZHVsZSxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgT2JzZXJ2ZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkZWJvdW5jZVRpbWV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBGYWN0b3J5IHRoYXQgY3JlYXRlcyBhIG5ldyBNdXRhdGlvbk9ic2VydmVyIGFuZCBhbGxvd3MgdXMgdG8gc3R1YiBpdCBvdXQgaW4gdW5pdCB0ZXN0cy5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTXV0YXRpb25PYnNlcnZlckZhY3Rvcnkge1xuICBjcmVhdGUoY2FsbGJhY2s6IE11dGF0aW9uQ2FsbGJhY2spOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCB7XG4gICAgcmV0dXJuIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG4gIH1cbn1cblxuXG4vKiogQW4gaW5qZWN0YWJsZSBzZXJ2aWNlIHRoYXQgYWxsb3dzIHdhdGNoaW5nIGVsZW1lbnRzIGZvciBjaGFuZ2VzIHRvIHRoZWlyIGNvbnRlbnQuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBDb250ZW50T2JzZXJ2ZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKiogS2VlcHMgdHJhY2sgb2YgdGhlIGV4aXN0aW5nIE11dGF0aW9uT2JzZXJ2ZXJzIHNvIHRoZXkgY2FuIGJlIHJldXNlZC4gKi9cbiAgcHJpdmF0ZSBfb2JzZXJ2ZWRFbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwge1xuICAgIG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgbnVsbCxcbiAgICBzdHJlYW06IFN1YmplY3Q8TXV0YXRpb25SZWNvcmRbXT4sXG4gICAgY291bnQ6IG51bWJlclxuICB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX211dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5OiBNdXRhdGlvbk9ic2VydmVyRmFjdG9yeSkge31cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmZvckVhY2goKF8sIGVsZW1lbnQpID0+IHRoaXMuX2NsZWFudXBPYnNlcnZlcihlbGVtZW50KSk7XG4gIH1cblxuICAvKipcbiAgICogT2JzZXJ2ZSBjb250ZW50IGNoYW5nZXMgb24gYW4gZWxlbWVudC5cbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gb2JzZXJ2ZSBmb3IgY29udGVudCBjaGFuZ2VzLlxuICAgKi9cbiAgb2JzZXJ2ZShlbGVtZW50OiBFbGVtZW50KTogT2JzZXJ2YWJsZTxNdXRhdGlvblJlY29yZFtdPjtcblxuICAvKipcbiAgICogT2JzZXJ2ZSBjb250ZW50IGNoYW5nZXMgb24gYW4gZWxlbWVudC5cbiAgICogQHBhcmFtIGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gb2JzZXJ2ZSBmb3IgY29udGVudCBjaGFuZ2VzLlxuICAgKi9cbiAgb2JzZXJ2ZShlbGVtZW50OiBFbGVtZW50UmVmPEVsZW1lbnQ+KTogT2JzZXJ2YWJsZTxNdXRhdGlvblJlY29yZFtdPjtcblxuICBvYnNlcnZlKGVsZW1lbnRPclJlZjogRWxlbWVudCB8IEVsZW1lbnRSZWY8RWxlbWVudD4pOiBPYnNlcnZhYmxlPE11dGF0aW9uUmVjb3JkW10+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY29lcmNlRWxlbWVudChlbGVtZW50T3JSZWYpO1xuXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8TXV0YXRpb25SZWNvcmRbXT4pID0+IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuX29ic2VydmVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gc3RyZWFtLnN1YnNjcmliZShvYnNlcnZlcik7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLl91bm9ic2VydmVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPYnNlcnZlcyB0aGUgZ2l2ZW4gZWxlbWVudCBieSB1c2luZyB0aGUgZXhpc3RpbmcgTXV0YXRpb25PYnNlcnZlciBpZiBhdmFpbGFibGUsIG9yIGNyZWF0aW5nIGFcbiAgICogbmV3IG9uZSBpZiBub3QuXG4gICAqL1xuICBwcml2YXRlIF9vYnNlcnZlRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogU3ViamVjdDxNdXRhdGlvblJlY29yZFtdPiB7XG4gICAgaWYgKCF0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gbmV3IFN1YmplY3Q8TXV0YXRpb25SZWNvcmRbXT4oKTtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gdGhpcy5fbXV0YXRpb25PYnNlcnZlckZhY3RvcnkuY3JlYXRlKG11dGF0aW9ucyA9PiBzdHJlYW0ubmV4dChtdXRhdGlvbnMpKTtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQsIHtcbiAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5zZXQoZWxlbWVudCwge29ic2VydmVyLCBzdHJlYW0sIGNvdW50OiAxfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIS5jb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLnN0cmVhbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVbi1vYnNlcnZlcyB0aGUgZ2l2ZW4gZWxlbWVudCBhbmQgY2xlYW5zIHVwIHRoZSB1bmRlcmx5aW5nIE11dGF0aW9uT2JzZXJ2ZXIgaWYgbm9ib2R5IGVsc2UgaXNcbiAgICogb2JzZXJ2aW5nIHRoaXMgZWxlbWVudC5cbiAgICovXG4gIHByaXZhdGUgX3Vub2JzZXJ2ZUVsZW1lbnQoZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmICh0aGlzLl9vYnNlcnZlZEVsZW1lbnRzLmhhcyhlbGVtZW50KSkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5nZXQoZWxlbWVudCkhLmNvdW50LS07XG4gICAgICBpZiAoIXRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpIS5jb3VudCkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwT2JzZXJ2ZXIoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIENsZWFuIHVwIHRoZSB1bmRlcmx5aW5nIE11dGF0aW9uT2JzZXJ2ZXIgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudC4gKi9cbiAgcHJpdmF0ZSBfY2xlYW51cE9ic2VydmVyKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZWRFbGVtZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IHtvYnNlcnZlciwgc3RyZWFtfSA9IHRoaXMuX29ic2VydmVkRWxlbWVudHMuZ2V0KGVsZW1lbnQpITtcbiAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgICBzdHJlYW0uY29tcGxldGUoKTtcbiAgICAgIHRoaXMuX29ic2VydmVkRWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5cbi8qKlxuICogRGlyZWN0aXZlIHRoYXQgdHJpZ2dlcnMgYSBjYWxsYmFjayB3aGVuZXZlciB0aGUgY29udGVudCBvZlxuICogaXRzIGFzc29jaWF0ZWQgZWxlbWVudCBoYXMgY2hhbmdlZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka09ic2VydmVDb250ZW50XScsXG4gIGV4cG9ydEFzOiAnY2RrT2JzZXJ2ZUNvbnRlbnQnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtPYnNlcnZlQ29udGVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIC8qKiBFdmVudCBlbWl0dGVkIGZvciBlYWNoIGNoYW5nZSBpbiB0aGUgZWxlbWVudCdzIGNvbnRlbnQuICovXG4gIEBPdXRwdXQoJ2Nka09ic2VydmVDb250ZW50JykgZXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPE11dGF0aW9uUmVjb3JkW10+KCk7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb2JzZXJ2aW5nIGNvbnRlbnQgaXMgZGlzYWJsZWQuIFRoaXMgb3B0aW9uIGNhbiBiZSB1c2VkXG4gICAqIHRvIGRpc2Nvbm5lY3QgdGhlIHVuZGVybHlpbmcgTXV0YXRpb25PYnNlcnZlciB1bnRpbCBpdCBpcyBuZWVkZWQuXG4gICAqL1xuICBASW5wdXQoJ2Nka09ic2VydmVDb250ZW50RGlzYWJsZWQnKVxuICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLl9kaXNhYmxlZCA/IHRoaXMuX3Vuc3Vic2NyaWJlKCkgOiB0aGlzLl9zdWJzY3JpYmUoKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIC8qKiBEZWJvdW5jZSBpbnRlcnZhbCBmb3IgZW1pdHRpbmcgdGhlIGNoYW5nZXMuICovXG4gIEBJbnB1dCgpXG4gIGdldCBkZWJvdW5jZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fZGVib3VuY2U7IH1cbiAgc2V0IGRlYm91bmNlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9kZWJvdW5jZSA9IGNvZXJjZU51bWJlclByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLl9zdWJzY3JpYmUoKTtcbiAgfVxuICBwcml2YXRlIF9kZWJvdW5jZTogbnVtYmVyO1xuXG4gIHByaXZhdGUgX2N1cnJlbnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbnRlbnRPYnNlcnZlcjogQ29udGVudE9ic2VydmVyLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICghdGhpcy5fY3VycmVudFN1YnNjcmlwdGlvbiAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fdW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N1YnNjcmliZSgpIHtcbiAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMuX2NvbnRlbnRPYnNlcnZlci5vYnNlcnZlKHRoaXMuX2VsZW1lbnRSZWYpO1xuXG4gICAgLy8gVE9ETyhtbWFsZXJiYSk6IFdlIHNob3VsZG4ndCBiZSBlbWl0dGluZyBvbiB0aGlzIEBPdXRwdXQoKSBvdXRzaWRlIHRoZSB6b25lLlxuICAgIC8vIENvbnNpZGVyIGJyaW5pbmcgaXQgYmFjayBpbnNpZGUgdGhlIHpvbmUgbmV4dCB0aW1lIHdlJ3JlIG1ha2luZyBicmVha2luZyBjaGFuZ2VzLlxuICAgIC8vIEJyaW5naW5nIGl0IGJhY2sgaW5zaWRlIGNhbiBjYXVzZSB0aGluZ3MgbGlrZSBpbmZpbml0ZSBjaGFuZ2UgZGV0ZWN0aW9uIGxvb3BzIGFuZCBjaGFuZ2VkXG4gICAgLy8gYWZ0ZXIgY2hlY2tlZCBlcnJvcnMgaWYgcGVvcGxlJ3MgY29kZSBpc24ndCBoYW5kbGluZyBpdCBwcm9wZXJseS5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5fY3VycmVudFN1YnNjcmlwdGlvbiA9XG4gICAgICAgICAgKHRoaXMuZGVib3VuY2UgPyBzdHJlYW0ucGlwZShkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZSkpIDogc3RyZWFtKS5zdWJzY3JpYmUodGhpcy5ldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91bnN1YnNjcmliZSgpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fY3VycmVudFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVib3VuY2U6IEJvb2xlYW5JbnB1dDtcbn1cblxuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbQ2RrT2JzZXJ2ZUNvbnRlbnRdLFxuICBkZWNsYXJhdGlvbnM6IFtDZGtPYnNlcnZlQ29udGVudF0sXG4gIHByb3ZpZGVyczogW011dGF0aW9uT2JzZXJ2ZXJGYWN0b3J5XVxufSlcbmV4cG9ydCBjbGFzcyBPYnNlcnZlcnNNb2R1bGUge31cbiJdfQ==