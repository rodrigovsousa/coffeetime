/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/layout/media-matcher.ts
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
import { Platform } from '@angular/cdk/platform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/**
 * Global registry for all dynamically-created, injected media queries.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
const mediaQueriesForWebkitCompatibility = new Set();
/**
 * Style tag that holds all of the dynamically-created media queries.
 * @type {?}
 */
let mediaQueryStyleNode;
/**
 * A utility for calling matchMedia queries.
 */
export class MediaMatcher {
    /**
     * @param {?} _platform
     */
    constructor(_platform) {
        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ?
            // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
            // call it from a different scope.
            window.matchMedia.bind(window) :
            noopMatchMedia;
    }
    /**
     * Evaluates the given media query and returns the native MediaQueryList from which results
     * can be retrieved.
     * Confirms the layout engine will trigger for the selector query provided and returns the
     * MediaQueryList for the query provided.
     * @param {?} query
     * @return {?}
     */
    matchMedia(query) {
        if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
        }
        return this._matchMedia(query);
    }
}
MediaMatcher.ɵfac = function MediaMatcher_Factory(t) { return new (t || MediaMatcher)(ɵngcc0.ɵɵinject(ɵngcc1.Platform)); };
/** @nocollapse */
MediaMatcher.ctorParameters = () => [
    { type: Platform }
];
/** @nocollapse */ MediaMatcher.ɵprov = i0.ɵɵdefineInjectable({ factory: function MediaMatcher_Factory() { return new MediaMatcher(i0.ɵɵinject(i1.Platform)); }, token: MediaMatcher, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MediaMatcher, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: ɵngcc1.Platform }]; }, null); })();
if (false) {
    /**
     * The internal matchMedia method to return back a MediaQueryList like object.
     * @type {?}
     * @private
     */
    MediaMatcher.prototype._matchMedia;
    /**
     * @type {?}
     * @private
     */
    MediaMatcher.prototype._platform;
}
/**
 * For Webkit engines that only trigger the MediaQueryListListener when
 * there is at least one CSS selector for the respective media query.
 * @param {?} query
 * @return {?}
 */
function createEmptyStyleRule(query) {
    if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
    }
    try {
        if (!mediaQueryStyleNode) {
            mediaQueryStyleNode = document.createElement('style');
            mediaQueryStyleNode.setAttribute('type', 'text/css');
            (/** @type {?} */ (document.head)).appendChild(mediaQueryStyleNode);
        }
        if (mediaQueryStyleNode.sheet) {
            ((/** @type {?} */ (mediaQueryStyleNode.sheet)))
                .insertRule(`@media ${query} {.fx-query-test{ }}`, 0);
            mediaQueriesForWebkitCompatibility.add(query);
        }
    }
    catch (e) {
        console.error(e);
    }
}
/**
 * No-op matchMedia replacement for non-browser platforms.
 * @param {?} query
 * @return {?}
 */
function noopMatchMedia(query) {
    // Use `as any` here to avoid adding additional necessary properties for
    // the noop matcher.
    return (/** @type {?} */ ({
        matches: query === 'all' || query === '',
        media: query,
        addListener: (/**
         * @return {?}
         */
        () => { }),
        removeListener: (/**
         * @return {?}
         */
        () => { })
    }));
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtbWF0Y2hlci5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9sYXlvdXQvbWVkaWEtbWF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQztBQUNvQztBQUMvQjtBQUFJO0FBRUo7QUFBYTs7O0FBQUksTUFGaEIsa0NBQWtDLEdBQWdCLElBQUksR0FBRyxFQUFVO0FBQ3pFO0FBQ0c7QUFBc0U7QUFDN0Q7QUFBSSxJQUFaLG1CQUFpRDtBQUNyRDtBQUNHO0FBQTZDO0FBRWhELE1BQU0sT0FBTyxZQUFZO0FBQ3pCO0FBQVE7QUFBNEI7QUFBUSxJQUcxQyxZQUFvQixTQUFtQjtBQUN6QyxRQURzQixjQUFTLEdBQVQsU0FBUyxDQUFVO0FBQUMsUUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEUsWUFBTSwwRkFBMEY7QUFDaEcsWUFBTSxrQ0FBa0M7QUFDeEMsWUFBTSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLFlBQU0sY0FBYyxDQUFDO0FBQ3JCLElBQUUsQ0FBQztBQUNIO0FBRUM7QUFDRTtBQUNFO0FBQ0U7QUFFSjtBQUF3QjtBQUMzQjtBQUFRLElBRE4sVUFBVSxDQUFDLEtBQWE7QUFBSSxRQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO0FBQy9CLFlBQU0sb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsU0FBSztBQUNMLFFBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLElBQUUsQ0FBQztBQUNIO3dDQXpCQyxVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLDBDQUMzQjtBQUFDO0FBQW1CO0FBQ1UsWUFYM0IsUUFBUTtBQUFHO0FBQUc7Ozs7eUVBS0c7QUFBQztBQUFhO0FBQVE7QUFHL0M7QUFBaUI7QUFBZ0I7QUFBUSxJQUl2QyxtQ0FBdUQ7QUFDekQ7QUFDTztBQUFpQjtBQUFnQjtBQUNyQyxJQURXLGlDQUEyQjtBQUFDO0FBQUU7QUFDekM7QUFDQztBQUFzRTtBQUFvQjtBQUNsRjtBQXVCWixTQUFTLG9CQUFvQixDQUFDLEtBQWE7QUFDM0MsSUFBRSxJQUFJLGtDQUFrQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNyRCxRQUFJLE9BQU87QUFDWCxLQUFHO0FBQ0gsSUFDRSxJQUFJO0FBQ04sUUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7QUFDOUIsWUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVELFlBQU0sbUJBQW1CLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMzRCxZQUFNLG1CQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUN0RCxTQUFLO0FBQ0wsUUFDSSxJQUFJLG1CQUFtQixDQUFDLEtBQUssRUFBRTtBQUNuQyxZQUFNLENBQUMsbUJBQUEsbUJBQW1CLENBQUMsS0FBSyxFQUFpQixDQUFDO0FBQ2xELGlCQUFXLFVBQVUsQ0FBQyxVQUFVLEtBQUssc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDaEUsWUFBTSxrQ0FBa0MsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsU0FBSztBQUNMLEtBQUc7QUFBQyxJQUFBLE9BQU8sQ0FBQyxFQUFFO0FBQ2QsUUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLEtBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDRztBQUEyRDtBQUMzQztBQUFlO0FBQWxDLFNBQVMsY0FBYyxDQUFDLEtBQWE7QUFBSSxJQUN2Qyx3RUFBd0U7QUFDMUUsSUFBRSxvQkFBb0I7QUFDdEIsSUFBRSxPQUFPLG1CQUFBO0FBQ1QsUUFBSSxPQUFPLEVBQUUsS0FBSyxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRTtBQUM1QyxRQUFJLEtBQUssRUFBRSxLQUFLO0FBQ2hCLFFBQUksV0FBVztBQUFPO0FBQ0o7QUFDakIsUUFGZ0IsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFBO0FBQ3pCLFFBQUksY0FBYztBQUFPO0FBR3BCO0FBQVksUUFIRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUE7QUFDNUIsS0FBRyxFQUFPLENBQUM7QUFDWCxDQUFDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BsYXRmb3JtfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuXG4vKiogR2xvYmFsIHJlZ2lzdHJ5IGZvciBhbGwgZHluYW1pY2FsbHktY3JlYXRlZCwgaW5qZWN0ZWQgbWVkaWEgcXVlcmllcy4gKi9cbmNvbnN0IG1lZGlhUXVlcmllc0ZvcldlYmtpdENvbXBhdGliaWxpdHk6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbi8qKiBTdHlsZSB0YWcgdGhhdCBob2xkcyBhbGwgb2YgdGhlIGR5bmFtaWNhbGx5LWNyZWF0ZWQgbWVkaWEgcXVlcmllcy4gKi9cbmxldCBtZWRpYVF1ZXJ5U3R5bGVOb2RlOiBIVE1MU3R5bGVFbGVtZW50IHwgdW5kZWZpbmVkO1xuXG4vKiogQSB1dGlsaXR5IGZvciBjYWxsaW5nIG1hdGNoTWVkaWEgcXVlcmllcy4gKi9cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE1lZGlhTWF0Y2hlciB7XG4gIC8qKiBUaGUgaW50ZXJuYWwgbWF0Y2hNZWRpYSBtZXRob2QgdG8gcmV0dXJuIGJhY2sgYSBNZWRpYVF1ZXJ5TGlzdCBsaWtlIG9iamVjdC4gKi9cbiAgcHJpdmF0ZSBfbWF0Y2hNZWRpYTogKHF1ZXJ5OiBzdHJpbmcpID0+IE1lZGlhUXVlcnlMaXN0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgIHRoaXMuX21hdGNoTWVkaWEgPSB0aGlzLl9wbGF0Zm9ybS5pc0Jyb3dzZXIgJiYgd2luZG93Lm1hdGNoTWVkaWEgP1xuICAgICAgLy8gbWF0Y2hNZWRpYSBpcyBib3VuZCB0byB0aGUgd2luZG93IHNjb3BlIGludGVudGlvbmFsbHkgYXMgaXQgaXMgYW4gaWxsZWdhbCBpbnZvY2F0aW9uIHRvXG4gICAgICAvLyBjYWxsIGl0IGZyb20gYSBkaWZmZXJlbnQgc2NvcGUuXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYS5iaW5kKHdpbmRvdykgOlxuICAgICAgbm9vcE1hdGNoTWVkaWE7XG4gIH1cblxuICAvKipcbiAgICogRXZhbHVhdGVzIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBhbmQgcmV0dXJucyB0aGUgbmF0aXZlIE1lZGlhUXVlcnlMaXN0IGZyb20gd2hpY2ggcmVzdWx0c1xuICAgKiBjYW4gYmUgcmV0cmlldmVkLlxuICAgKiBDb25maXJtcyB0aGUgbGF5b3V0IGVuZ2luZSB3aWxsIHRyaWdnZXIgZm9yIHRoZSBzZWxlY3RvciBxdWVyeSBwcm92aWRlZCBhbmQgcmV0dXJucyB0aGVcbiAgICogTWVkaWFRdWVyeUxpc3QgZm9yIHRoZSBxdWVyeSBwcm92aWRlZC5cbiAgICovXG4gIG1hdGNoTWVkaWEocXVlcnk6IHN0cmluZyk6IE1lZGlhUXVlcnlMaXN0IHtcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0uV0VCS0lUKSB7XG4gICAgICBjcmVhdGVFbXB0eVN0eWxlUnVsZShxdWVyeSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9tYXRjaE1lZGlhKHF1ZXJ5KTtcbiAgfVxufVxuXG4vKipcbiAqIEZvciBXZWJraXQgZW5naW5lcyB0aGF0IG9ubHkgdHJpZ2dlciB0aGUgTWVkaWFRdWVyeUxpc3RMaXN0ZW5lciB3aGVuXG4gKiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgQ1NTIHNlbGVjdG9yIGZvciB0aGUgcmVzcGVjdGl2ZSBtZWRpYSBxdWVyeS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRW1wdHlTdHlsZVJ1bGUocXVlcnk6IHN0cmluZykge1xuICBpZiAobWVkaWFRdWVyaWVzRm9yV2Via2l0Q29tcGF0aWJpbGl0eS5oYXMocXVlcnkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBpZiAoIW1lZGlhUXVlcnlTdHlsZU5vZGUpIHtcbiAgICAgIG1lZGlhUXVlcnlTdHlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgbWVkaWFRdWVyeVN0eWxlTm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgIGRvY3VtZW50LmhlYWQhLmFwcGVuZENoaWxkKG1lZGlhUXVlcnlTdHlsZU5vZGUpO1xuICAgIH1cblxuICAgIGlmIChtZWRpYVF1ZXJ5U3R5bGVOb2RlLnNoZWV0KSB7XG4gICAgICAobWVkaWFRdWVyeVN0eWxlTm9kZS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0KVxuICAgICAgICAgIC5pbnNlcnRSdWxlKGBAbWVkaWEgJHtxdWVyeX0gey5meC1xdWVyeS10ZXN0eyB9fWAsIDApO1xuICAgICAgbWVkaWFRdWVyaWVzRm9yV2Via2l0Q29tcGF0aWJpbGl0eS5hZGQocXVlcnkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gIH1cbn1cblxuLyoqIE5vLW9wIG1hdGNoTWVkaWEgcmVwbGFjZW1lbnQgZm9yIG5vbi1icm93c2VyIHBsYXRmb3Jtcy4gKi9cbmZ1bmN0aW9uIG5vb3BNYXRjaE1lZGlhKHF1ZXJ5OiBzdHJpbmcpOiBNZWRpYVF1ZXJ5TGlzdCB7XG4gIC8vIFVzZSBgYXMgYW55YCBoZXJlIHRvIGF2b2lkIGFkZGluZyBhZGRpdGlvbmFsIG5lY2Vzc2FyeSBwcm9wZXJ0aWVzIGZvclxuICAvLyB0aGUgbm9vcCBtYXRjaGVyLlxuICByZXR1cm4ge1xuICAgIG1hdGNoZXM6IHF1ZXJ5ID09PSAnYWxsJyB8fCBxdWVyeSA9PT0gJycsXG4gICAgbWVkaWE6IHF1ZXJ5LFxuICAgIGFkZExpc3RlbmVyOiAoKSA9PiB7fSxcbiAgICByZW1vdmVMaXN0ZW5lcjogKCkgPT4ge31cbiAgfSBhcyBhbnk7XG59XG4iXX0=