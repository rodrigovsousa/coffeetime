/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/overlay/keyboard/overlay-keyboard-dispatcher.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
/**
 * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
 * if any. It maintains a list of attached overlays to determine best suited overlay based
 * on event target and order of overlay opens.
 */
import * as ɵngcc0 from '@angular/core';
export class OverlayKeyboardDispatcher {
    /**
     * @param {?} document
     */
    constructor(document) {
        /**
         * Currently attached overlays in the order they were attached.
         */
        this._attachedOverlays = [];
        /**
         * Keyboard event listener that will be attached to the body.
         */
        this._keydownListener = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const overlays = this._attachedOverlays;
            for (let i = overlays.length - 1; i > -1; i--) {
                // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
                // We want to target the most recent overlay, rather than trying to match where the event came
                // from, because some components might open an overlay, but keep focus on a trigger element
                // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
                // because we don't want overlays that don't handle keyboard events to block the ones below
                // them that do.
                if (overlays[i]._keydownEventSubscriptions > 0) {
                    overlays[i]._keydownEvents.next(event);
                    break;
                }
            }
        });
        this._document = document;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._detach();
    }
    /**
     * Add a new overlay to the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    add(overlayRef) {
        // Ensure that we don't get the same overlay multiple times.
        this.remove(overlayRef);
        // Lazily start dispatcher once first overlay is added
        if (!this._isAttached) {
            this._document.body.addEventListener('keydown', this._keydownListener);
            this._isAttached = true;
        }
        this._attachedOverlays.push(overlayRef);
    }
    /**
     * Remove an overlay from the list of attached overlay refs.
     * @param {?} overlayRef
     * @return {?}
     */
    remove(overlayRef) {
        /** @type {?} */
        const index = this._attachedOverlays.indexOf(overlayRef);
        if (index > -1) {
            this._attachedOverlays.splice(index, 1);
        }
        // Remove the global listener once there are no more overlays.
        if (this._attachedOverlays.length === 0) {
            this._detach();
        }
    }
    /**
     * Detaches the global keyboard event listener.
     * @private
     * @return {?}
     */
    _detach() {
        if (this._isAttached) {
            this._document.body.removeEventListener('keydown', this._keydownListener);
            this._isAttached = false;
        }
    }
}
OverlayKeyboardDispatcher.ɵfac = function OverlayKeyboardDispatcher_Factory(t) { return new (t || OverlayKeyboardDispatcher)(ɵngcc0.ɵɵinject(DOCUMENT)); };
/** @nocollapse */
OverlayKeyboardDispatcher.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ OverlayKeyboardDispatcher.ɵprov = i0.ɵɵdefineInjectable({ factory: function OverlayKeyboardDispatcher_Factory() { return new OverlayKeyboardDispatcher(i0.ɵɵinject(i1.DOCUMENT)); }, token: OverlayKeyboardDispatcher, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(OverlayKeyboardDispatcher, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
if (false) {
    /**
     * Currently attached overlays in the order they were attached.
     * @type {?}
     */
    OverlayKeyboardDispatcher.prototype._attachedOverlays;
    /**
     * @type {?}
     * @private
     */
    OverlayKeyboardDispatcher.prototype._document;
    /**
     * @type {?}
     * @private
     */
    OverlayKeyboardDispatcher.prototype._isAttached;
    /**
     * Keyboard event listener that will be attached to the body.
     * @type {?}
     * @private
     */
    OverlayKeyboardDispatcher.prototype._keydownListener;
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} dispatcher
 * @param {?} _document
 * @return {?}
 */
export function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
    return dispatcher || new OverlayKeyboardDispatcher(_document);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
export const OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
    // If there is already an OverlayKeyboardDispatcher available, use that.
    // Otherwise, provide a new one.
    provide: OverlayKeyboardDispatcher,
    deps: [
        [new Optional(), new SkipSelf(), OverlayKeyboardDispatcher],
        (/** @type {?} */ (
        // Coerce to `InjectionToken` so that the `deps` match the "shape"
        // of the type expected by Angular
        DOCUMENT))
    ],
    useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1rZXlib2FyZC1kaXNwYXRjaGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL292ZXJsYXkva2V5Ym9hcmQvb3ZlcmxheS1rZXlib2FyZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsTUFBTSxFQUNOLFVBQVUsRUFHVixRQUFRLEVBQ1IsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCO0FBQXFDO0FBSVY7QUFBSTtBQUNBO0FBQ0E7QUFFSjs7QUFDM0IsTUFBTSxPQUFPLHlCQUF5QjtBQUFHO0FBQVE7QUFFcEM7QUFBUSxJQU1uQixZQUE4QixRQUFhO0FBQzdDO0FBQVk7QUFPUDtBQUFZLFFBYmYsc0JBQWlCLEdBQWlCLEVBQUUsQ0FBQztBQUN2QztBQUNXO0FBR007QUFBWSxRQTZDbkIscUJBQWdCO0FBQVE7QUFDN0I7QUFBdUI7QUFBWSxRQURYLENBQUMsS0FBb0IsRUFBRSxFQUFFO0FBQ3REO0FBQTZCLGtCQUFuQixRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjtBQUMzQyxZQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ25ELGdCQUFNLDZGQUE2RjtBQUNuRyxnQkFBTSw4RkFBOEY7QUFDcEcsZ0JBQU0sMkZBQTJGO0FBQ2pHLGdCQUFNLDRGQUE0RjtBQUNsRyxnQkFBTSwyRkFBMkY7QUFDakcsZ0JBQU0sZ0JBQWdCO0FBQ3RCLGdCQUFNLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLDBCQUEwQixHQUFHLENBQUMsRUFBRTtBQUN0RCxvQkFBUSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUks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QUksUUFBUSxFQUFFLEVBQUUseUJBQXlCLENBQUM7QUFDL0QsUUFHSTtBQUFvQixRQUZwQixrRUFBa0U7QUFDdEUsUUFBSSxrQ0FBa0M7QUFDdEMsUUFBSSxRQUFRLEVBQXVCO0FBQ25DLEtBQUc7QUFDSCxJQUFFLFVBQVUsRUFBRSw0Q0FBNEM7QUFDMUQsQ0FBQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdGlvblRva2VuLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge092ZXJsYXlSZWZ9IGZyb20gJy4uL292ZXJsYXktcmVmJztcblxuXG4vKipcbiAqIFNlcnZpY2UgZm9yIGRpc3BhdGNoaW5nIGtleWJvYXJkIGV2ZW50cyB0aGF0IGxhbmQgb24gdGhlIGJvZHkgdG8gYXBwcm9wcmlhdGUgb3ZlcmxheSByZWYsXG4gKiBpZiBhbnkuIEl0IG1haW50YWlucyBhIGxpc3Qgb2YgYXR0YWNoZWQgb3ZlcmxheXMgdG8gZGV0ZXJtaW5lIGJlc3Qgc3VpdGVkIG92ZXJsYXkgYmFzZWRcbiAqIG9uIGV2ZW50IHRhcmdldCBhbmQgb3JkZXIgb2Ygb3ZlcmxheSBvcGVucy5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgLyoqIEN1cnJlbnRseSBhdHRhY2hlZCBvdmVybGF5cyBpbiB0aGUgb3JkZXIgdGhleSB3ZXJlIGF0dGFjaGVkLiAqL1xuICBfYXR0YWNoZWRPdmVybGF5czogT3ZlcmxheVJlZltdID0gW107XG5cbiAgcHJpdmF0ZSBfZG9jdW1lbnQ6IERvY3VtZW50O1xuICBwcml2YXRlIF9pc0F0dGFjaGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcbiAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGV0YWNoKCk7XG4gIH1cblxuICAvKiogQWRkIGEgbmV3IG92ZXJsYXkgdG8gdGhlIGxpc3Qgb2YgYXR0YWNoZWQgb3ZlcmxheSByZWZzLiAqL1xuICBhZGQob3ZlcmxheVJlZjogT3ZlcmxheVJlZik6IHZvaWQge1xuICAgIC8vIEVuc3VyZSB0aGF0IHdlIGRvbid0IGdldCB0aGUgc2FtZSBvdmVybGF5IG11bHRpcGxlIHRpbWVzLlxuICAgIHRoaXMucmVtb3ZlKG92ZXJsYXlSZWYpO1xuXG4gICAgLy8gTGF6aWx5IHN0YXJ0IGRpc3BhdGNoZXIgb25jZSBmaXJzdCBvdmVybGF5IGlzIGFkZGVkXG4gICAgaWYgKCF0aGlzLl9pc0F0dGFjaGVkKSB7XG4gICAgICB0aGlzLl9kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9rZXlkb3duTGlzdGVuZXIpO1xuICAgICAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fYXR0YWNoZWRPdmVybGF5cy5wdXNoKG92ZXJsYXlSZWYpO1xuICB9XG5cbiAgLyoqIFJlbW92ZSBhbiBvdmVybGF5IGZyb20gdGhlIGxpc3Qgb2YgYXR0YWNoZWQgb3ZlcmxheSByZWZzLiAqL1xuICByZW1vdmUob3ZlcmxheVJlZjogT3ZlcmxheVJlZik6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fYXR0YWNoZWRPdmVybGF5cy5pbmRleE9mKG92ZXJsYXlSZWYpO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuX2F0dGFjaGVkT3ZlcmxheXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBsaXN0ZW5lciBvbmNlIHRoZXJlIGFyZSBubyBtb3JlIG92ZXJsYXlzLlxuICAgIGlmICh0aGlzLl9hdHRhY2hlZE92ZXJsYXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fZGV0YWNoKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIERldGFjaGVzIHRoZSBnbG9iYWwga2V5Ym9hcmQgZXZlbnQgbGlzdGVuZXIuICovXG4gIHByaXZhdGUgX2RldGFjaCgpIHtcbiAgICBpZiAodGhpcy5faXNBdHRhY2hlZCkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fa2V5ZG93bkxpc3RlbmVyKTtcbiAgICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKiogS2V5Ym9hcmQgZXZlbnQgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoZSBib2R5LiAqL1xuICBwcml2YXRlIF9rZXlkb3duTGlzdGVuZXIgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBjb25zdCBvdmVybGF5cyA9IHRoaXMuX2F0dGFjaGVkT3ZlcmxheXM7XG5cbiAgICBmb3IgKGxldCBpID0gb3ZlcmxheXMubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAgIC8vIERpc3BhdGNoIHRoZSBrZXlkb3duIGV2ZW50IHRvIHRoZSB0b3Agb3ZlcmxheSB3aGljaCBoYXMgc3Vic2NyaWJlcnMgdG8gaXRzIGtleWRvd24gZXZlbnRzLlxuICAgICAgLy8gV2Ugd2FudCB0byB0YXJnZXQgdGhlIG1vc3QgcmVjZW50IG92ZXJsYXksIHJhdGhlciB0aGFuIHRyeWluZyB0byBtYXRjaCB3aGVyZSB0aGUgZXZlbnQgY2FtZVxuICAgICAgLy8gZnJvbSwgYmVjYXVzZSBzb21lIGNvbXBvbmVudHMgbWlnaHQgb3BlbiBhbiBvdmVybGF5LCBidXQga2VlcCBmb2N1cyBvbiBhIHRyaWdnZXIgZWxlbWVudFxuICAgICAgLy8gKGUuZy4gZm9yIHNlbGVjdCBhbmQgYXV0b2NvbXBsZXRlKS4gV2Ugc2tpcCBvdmVybGF5cyB3aXRob3V0IGtleWRvd24gZXZlbnQgc3Vic2NyaXB0aW9ucyxcbiAgICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBvdmVybGF5cyB0aGF0IGRvbid0IGhhbmRsZSBrZXlib2FyZCBldmVudHMgdG8gYmxvY2sgdGhlIG9uZXMgYmVsb3dcbiAgICAgIC8vIHRoZW0gdGhhdCBkby5cbiAgICAgIGlmIChvdmVybGF5c1tpXS5fa2V5ZG93bkV2ZW50U3Vic2NyaXB0aW9ucyA+IDApIHtcbiAgICAgICAgb3ZlcmxheXNbaV0uX2tleWRvd25FdmVudHMubmV4dChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8qKiBAZG9jcy1wcml2YXRlIEBkZXByZWNhdGVkIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgKi9cbmV4cG9ydCBmdW5jdGlvbiBPVkVSTEFZX0tFWUJPQVJEX0RJU1BBVENIRVJfUFJPVklERVJfRkFDVE9SWShcbiAgICBkaXNwYXRjaGVyOiBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLCBfZG9jdW1lbnQ6IGFueSkge1xuICByZXR1cm4gZGlzcGF0Y2hlciB8fCBuZXcgT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcihfZG9jdW1lbnQpO1xufVxuXG4vKiogQGRvY3MtcHJpdmF0ZSBAZGVwcmVjYXRlZCBAYnJlYWtpbmctY2hhbmdlIDguMC4wICovXG5leHBvcnQgY29uc3QgT1ZFUkxBWV9LRVlCT0FSRF9ESVNQQVRDSEVSX1BST1ZJREVSID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGFuIE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXIgYXZhaWxhYmxlLCB1c2UgdGhhdC5cbiAgLy8gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlcixcbiAgZGVwczogW1xuICAgIFtuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE92ZXJsYXlLZXlib2FyZERpc3BhdGNoZXJdLFxuXG4gICAgLy8gQ29lcmNlIHRvIGBJbmplY3Rpb25Ub2tlbmAgc28gdGhhdCB0aGUgYGRlcHNgIG1hdGNoIHRoZSBcInNoYXBlXCJcbiAgICAvLyBvZiB0aGUgdHlwZSBleHBlY3RlZCBieSBBbmd1bGFyXG4gICAgRE9DVU1FTlQgYXMgSW5qZWN0aW9uVG9rZW48YW55PlxuICBdLFxuICB1c2VGYWN0b3J5OiBPVkVSTEFZX0tFWUJPQVJEX0RJU1BBVENIRVJfUFJPVklERVJfRkFDVE9SWVxufTtcbiJdfQ==