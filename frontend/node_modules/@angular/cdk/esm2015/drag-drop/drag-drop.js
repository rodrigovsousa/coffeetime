/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-drop.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, Inject, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { DragRef } from './drag-ref';
import { DropListRef } from './drop-list-ref';
import { DragDropRegistry } from './drag-drop-registry';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/scrolling";
import * as i3 from "angular_material/src/cdk/drag-drop/drag-drop-registry";
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/scrolling';
const DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
export class DragDrop {
    /**
     * @param {?} _document
     * @param {?} _ngZone
     * @param {?} _viewportRuler
     * @param {?} _dragDropRegistry
     */
    constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    createDrag(element, config = DEFAULT_CONFIG) {
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    }
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    createDropList(element) {
        return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
    }
}
DragDrop.ɵfac = function DragDrop_Factory(t) { return new (t || DragDrop)(ɵngcc0.ɵɵinject(DOCUMENT), ɵngcc0.ɵɵinject(ɵngcc0.NgZone), ɵngcc0.ɵɵinject(ɵngcc1.ViewportRuler), ɵngcc0.ɵɵinject(DragDropRegistry)); };
/** @nocollapse */
DragDrop.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: NgZone },
    { type: ViewportRuler },
    { type: DragDropRegistry }
];
/** @nocollapse */ DragDrop.ɵprov = i0.ɵɵdefineInjectable({ factory: function DragDrop_Factory() { return new DragDrop(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i2.ViewportRuler), i0.ɵɵinject(i3.DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragDrop, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.NgZone }, { type: ɵngcc1.ViewportRuler }, { type: DragDropRegistry }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    DragDrop.prototype._document;
    /**
     * @type {?}
     * @private
     */
    DragDrop.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    DragDrop.prototype._viewportRuler;
    /**
     * @type {?}
     * @private
     */
    DragDrop.prototype._dragDropRegistry;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL2RyYWctZHJvcC9kcmFnLWRyb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLE9BQU8sRUFBZ0IsTUFBTSxZQUFZLENBQUM7QUFDbEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3REO0FBQ29DO0FBQzVCO0FBRUo7QUFJZ0M7QUFBSTtBQUU1QjtBQUFhOzs7QUFBSSxNQVJ2QixjQUFjLEdBQUc7QUFDdkIsSUFBRSxrQkFBa0IsRUFBRSxDQUFDO0FBQ3ZCLElBQUUsK0JBQStCLEVBQUUsQ0FBQztBQUNwQyxDQUFDO0FBQ0Q7QUFDRztBQUNtRjtBQUd0RixNQUFNLE9BQU8sUUFBUTtBQUNyQjtBQUFRO0FBQ2E7QUFDcEI7QUFDSTtBQUFvQztBQUNuQyxJQUpKLFlBQzRCLFNBQWMsRUFDaEMsT0FBZSxFQUNmLGNBQTZCLEVBQzdCLGlCQUF5RDtBQUFJLFFBSDNDLGNBQVMsR0FBVCxTQUFTLENBQUs7QUFBQyxRQUNqQyxZQUFPLEdBQVAsT0FBTyxDQUFRO0FBQUMsUUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQWU7QUFBQyxRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXdDO0FBQUMsSUFBRSxDQUFDO0FBQ3pFO0FBRUM7QUFDRTtBQUFtQjtBQUNNO0FBRUM7QUFBbUI7QUFBUSxJQUF0RCxVQUFVLENBQVUsT0FBOEMsRUFDcEQsU0FBd0IsY0FBYztBQUFJLFFBRXRELE9BQU8sSUFBSSxPQUFPLENBQUksT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFDcEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDaEMsSUFBRSxDQUFDO0FBQ0g7QUFFQztBQUNFO0FBQW1CO0FBRUE7QUFBbUI7QUFBUSxJQUEvQyxjQUFjLENBQVUsT0FBOEM7QUFBSSxRQUN4RSxPQUFPLElBQUksV0FBVyxDQUFJLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUNuRixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDN0IsSUFBRSxDQUFDO0FBQ0g7b0NBNUJDLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMscUlBQzNCO0FBQUM7QUFDTDtBQUNtQiw0Q0FBZixNQUFNLFNBQUMsUUFBUTtBQUFTLFlBbkJELE1BQU07QUFBSSxZQUU5QixhQUFhO0FBQUksWUFHakIsZ0JBQWdCO0FBQUc7QUFBRzs7Ozs7Ozt1SEFVNUI7QUFBQztBQUNTO0FBQVE7QUFDakI7QUFBZ0I7QUFDaEIsSUFDQyw2QkFBd0M7QUFBQztBQUN0QztBQUFpQjtBQUNiO0FBQVEsSUFEZiwyQkFBdUI7QUFBQztBQUNyQjtBQUFpQjtBQUFnQjtBQUNuQyxJQURELGtDQUFxQztBQUFDO0FBQ25DO0FBQWlCO0FBQWdCO0FBQVEsSUFBNUMscUNBQWlFO0FBQUM7QUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGUsIEluamVjdCwgTmdab25lLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1ZpZXdwb3J0UnVsZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtEcmFnUmVmLCBEcmFnUmVmQ29uZmlnfSBmcm9tICcuL2RyYWctcmVmJztcbmltcG9ydCB7RHJvcExpc3RSZWZ9IGZyb20gJy4vZHJvcC1saXN0LXJlZic7XG5pbXBvcnQge0RyYWdEcm9wUmVnaXN0cnl9IGZyb20gJy4vZHJhZy1kcm9wLXJlZ2lzdHJ5JztcblxuLyoqIERlZmF1bHQgY29uZmlndXJhdGlvbiB0byBiZSB1c2VkIHdoZW4gY3JlYXRpbmcgYSBgRHJhZ1JlZmAuICovXG5jb25zdCBERUZBVUxUX0NPTkZJRyA9IHtcbiAgZHJhZ1N0YXJ0VGhyZXNob2xkOiA1LFxuICBwb2ludGVyRGlyZWN0aW9uQ2hhbmdlVGhyZXNob2xkOiA1XG59O1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBhbGxvd3MgZm9yIGRyYWctYW5kLWRyb3AgZnVuY3Rpb25hbGl0eSB0byBiZSBhdHRhY2hlZCB0byBET00gZWxlbWVudHMuXG4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIERyYWdEcm9wIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIF92aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyLFxuICAgIHByaXZhdGUgX2RyYWdEcm9wUmVnaXN0cnk6IERyYWdEcm9wUmVnaXN0cnk8RHJhZ1JlZiwgRHJvcExpc3RSZWY+KSB7fVxuXG4gIC8qKlxuICAgKiBUdXJucyBhbiBlbGVtZW50IGludG8gYSBkcmFnZ2FibGUgaXRlbS5cbiAgICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byB3aGljaCB0byBhdHRhY2ggdGhlIGRyYWdnaW5nIGZ1bmN0aW9uYWxpdHkuXG4gICAqIEBwYXJhbSBjb25maWcgT2JqZWN0IHVzZWQgdG8gY29uZmlndXJlIHRoZSBkcmFnZ2luZyBiZWhhdmlvci5cbiAgICovXG4gIGNyZWF0ZURyYWc8VCA9IGFueT4oZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4gfCBIVE1MRWxlbWVudCxcbiAgICAgICAgICAgICAgICBjb25maWc6IERyYWdSZWZDb25maWcgPSBERUZBVUxUX0NPTkZJRyk6IERyYWdSZWY8VD4ge1xuXG4gICAgcmV0dXJuIG5ldyBEcmFnUmVmPFQ+KGVsZW1lbnQsIGNvbmZpZywgdGhpcy5fZG9jdW1lbnQsIHRoaXMuX25nWm9uZSwgdGhpcy5fdmlld3BvcnRSdWxlcixcbiAgICAgICAgdGhpcy5fZHJhZ0Ryb3BSZWdpc3RyeSk7XG4gIH1cblxuICAvKipcbiAgICogVHVybnMgYW4gZWxlbWVudCBpbnRvIGEgZHJvcCBsaXN0LlxuICAgKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHRvIHdoaWNoIHRvIGF0dGFjaCB0aGUgZHJvcCBsaXN0IGZ1bmN0aW9uYWxpdHkuXG4gICAqL1xuICBjcmVhdGVEcm9wTGlzdDxUID0gYW55PihlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50KTogRHJvcExpc3RSZWY8VD4ge1xuICAgIHJldHVybiBuZXcgRHJvcExpc3RSZWY8VD4oZWxlbWVudCwgdGhpcy5fZHJhZ0Ryb3BSZWdpc3RyeSwgdGhpcy5fZG9jdW1lbnQsIHRoaXMuX25nWm9uZSxcbiAgICAgICAgdGhpcy5fdmlld3BvcnRSdWxlcik7XG4gIH1cbn1cbiJdfQ==