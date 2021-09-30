/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/collections/unique-selection-dispatcher.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
import * as ɵngcc0 from '@angular/core';
export class UniqueSelectionDispatcher {
    constructor() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    notify(id, name) {
        for (let listener of this._listeners) {
            listener(id, name);
        }
    }
    /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    listen(listener) {
        this._listeners.push(listener);
        return (/**
         * @return {?}
         */
        () => {
            this._listeners = this._listeners.filter((/**
             * @param {?} registered
             * @return {?}
             */
            (registered) => {
                return listener !== registered;
            }));
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._listeners = [];
    }
}
UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) { return new (t || UniqueSelectionDispatcher)(); };
/** @nocollapse */ UniqueSelectionDispatcher.ɵprov = i0.ɵɵdefineInjectable({ factory: function UniqueSelectionDispatcher_Factory() { return new UniqueSelectionDispatcher(); }, token: UniqueSelectionDispatcher, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UniqueSelectionDispatcher, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueSelectionDispatcher.prototype._listeners;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXNlbGVjdGlvbi1kaXNwYXRjaGVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2NvbGxlY3Rpb25zL3VuaXF1ZS1zZWxlY3Rpb24tZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3BEO0FBRW1DO0FBQUk7QUFBdUQ7QUFDakQ7QUFHUztBQUVqQztBQUFHO0FBQ0Q7QUFFRTs7QUFJekIsTUFBTSxPQUFPLHlCQUF5QjtBQUFHLElBRHpDO0FBQWdCLFFBRU4sZUFBVSxHQUF3QyxFQUFFLENBQUM7QUFDL0QsS0E0QkM7QUFDRDtBQUFRO0FBQTBFO0FBQXFDO0FBQXlDO0FBQW1CO0FBQVEsSUF2QnpMLE1BQU0sQ0FBQyxFQUFVLEVBQUUsSUFBWTtBQUNqQyxRQUFJLEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUMxQyxZQUFNLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDekIsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNIO0FBRUM7QUFDRTtBQUEyQjtBQUVBO0FBQVEsSUFBcEMsTUFBTSxDQUFDLFFBQTJDO0FBQUksUUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkMsUUFBSTtBQUFZO0FBQ0k7QUFBWSxRQURyQixHQUFHLEVBQUU7QUFDaEIsWUFBTSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtBQUFNO0FBQXFDO0FBQ3pFO0FBQWdCLFlBRGUsQ0FBQyxVQUE2QyxFQUFFLEVBQUU7QUFDakcsZ0JBQVEsT0FBTyxRQUFRLEtBQUssVUFBVSxDQUFDO0FBQ3ZDLFlBQU0sQ0FBQyxFQUFDLENBQUM7QUFDVCxRQUFJLENBQUMsRUFBQztBQUNOLElBQUUsQ0FBQztBQUNIO0FBQ087QUFDQztBQUFRLElBRGQsV0FBVztBQUNiLFFBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDekIsSUFBRSxDQUFDO0FBQ0g7cURBL0JDLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsb0NBQzNCO0FBQUM7Ozs7Z0RBTUo7QUFBQztBQUFhO0FBQVE7QUFFeEI7QUFBZ0I7QUFBUSxJQVB0QiwrQ0FBNkQ7QUFDL0Q7QUFDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGUsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuLy8gVXNlcnMgb2YgdGhlIERpc3BhdGNoZXIgbmV2ZXIgbmVlZCB0byBzZWUgdGhpcyB0eXBlLCBidXQgVHlwZVNjcmlwdCByZXF1aXJlcyBpdCB0byBiZSBleHBvcnRlZC5cbmV4cG9ydCB0eXBlIFVuaXF1ZVNlbGVjdGlvbkRpc3BhdGNoZXJMaXN0ZW5lciA9IChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG5cbi8qKlxuICogQ2xhc3MgdG8gY29vcmRpbmF0ZSB1bmlxdWUgc2VsZWN0aW9uIGJhc2VkIG9uIG5hbWUuXG4gKiBJbnRlbmRlZCB0byBiZSBjb25zdW1lZCBhcyBhbiBBbmd1bGFyIHNlcnZpY2UuXG4gKiBUaGlzIHNlcnZpY2UgaXMgbmVlZGVkIGJlY2F1c2UgbmF0aXZlIHJhZGlvIGNoYW5nZSBldmVudHMgYXJlIG9ubHkgZmlyZWQgb24gdGhlIGl0ZW0gY3VycmVudGx5XG4gKiBiZWluZyBzZWxlY3RlZCwgYW5kIHdlIHN0aWxsIG5lZWQgdG8gdW5jaGVjayB0aGUgcHJldmlvdXMgc2VsZWN0aW9uLlxuICpcbiAqIFRoaXMgc2VydmljZSBkb2VzIG5vdCAqc3RvcmUqIGFueSBJRHMgYW5kIG5hbWVzIGJlY2F1c2UgdGhleSBtYXkgY2hhbmdlIGF0IGFueSB0aW1lLCBzbyBpdCBpc1xuICogbGVzcyBlcnJvci1wcm9uZSBpZiB0aGV5IGFyZSBzaW1wbHkgcGFzc2VkIHRocm91Z2ggd2hlbiB0aGUgZXZlbnRzIG9jY3VyLlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBVbmlxdWVTZWxlY3Rpb25EaXNwYXRjaGVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfbGlzdGVuZXJzOiBVbmlxdWVTZWxlY3Rpb25EaXNwYXRjaGVyTGlzdGVuZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBOb3RpZnkgb3RoZXIgaXRlbXMgdGhhdCBzZWxlY3Rpb24gZm9yIHRoZSBnaXZlbiBuYW1lIGhhcyBiZWVuIHNldC5cbiAgICogQHBhcmFtIGlkIElEIG9mIHRoZSBpdGVtLlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBpdGVtLlxuICAgKi9cbiAgbm90aWZ5KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuICAgIGZvciAobGV0IGxpc3RlbmVyIG9mIHRoaXMuX2xpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXIoaWQsIG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW4gZm9yIGZ1dHVyZSBjaGFuZ2VzIHRvIGl0ZW0gc2VsZWN0aW9uLlxuICAgKiBAcmV0dXJuIEZ1bmN0aW9uIHVzZWQgdG8gZGVyZWdpc3RlciBsaXN0ZW5lclxuICAgKi9cbiAgbGlzdGVuKGxpc3RlbmVyOiBVbmlxdWVTZWxlY3Rpb25EaXNwYXRjaGVyTGlzdGVuZXIpOiAoKSA9PiB2b2lkIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycy5maWx0ZXIoKHJlZ2lzdGVyZWQ6IFVuaXF1ZVNlbGVjdGlvbkRpc3BhdGNoZXJMaXN0ZW5lcikgPT4ge1xuICAgICAgICByZXR1cm4gbGlzdGVuZXIgIT09IHJlZ2lzdGVyZWQ7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzID0gW107XG4gIH1cbn1cbiJdfQ==