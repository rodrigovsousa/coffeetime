/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/tree/node.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, TemplateRef } from '@angular/core';
/**
 * Context provided to the tree node component.
 * @template T
 */
import * as ɵngcc0 from '@angular/core';
export class CdkTreeNodeOutletContext {
    /**
     * @param {?} data
     */
    constructor(data) {
        this.$implicit = data;
    }
}
if (false) {
    /**
     * Data for the node.
     * @type {?}
     */
    CdkTreeNodeOutletContext.prototype.$implicit;
    /**
     * Depth of the node.
     * @type {?}
     */
    CdkTreeNodeOutletContext.prototype.level;
    /**
     * Index location of the node.
     * @type {?}
     */
    CdkTreeNodeOutletContext.prototype.index;
    /**
     * Length of the number of total dataNodes.
     * @type {?}
     */
    CdkTreeNodeOutletContext.prototype.count;
}
/**
 * Data node definition for the CdkTree.
 * Captures the node's template and a when predicate that describes when this node should be used.
 * @template T
 */
export class CdkTreeNodeDef {
    /**
     * \@docs-private
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
CdkTreeNodeDef.ɵfac = function CdkTreeNodeDef_Factory(t) { return new (t || CdkTreeNodeDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkTreeNodeDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkTreeNodeDef, selectors: [["", "cdkTreeNodeDef", ""]], inputs: { when: ["cdkTreeNodeDefWhen", "when"] } });
/** @nocollapse */
CdkTreeNodeDef.ctorParameters = () => [
    { type: TemplateRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkTreeNodeDef, [{
        type: Directive,
        args: [{
                selector: '[cdkTreeNodeDef]',
                inputs: [
                    'when: cdkTreeNodeDefWhen'
                ]
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
if (false) {
    /**
     * Function that should return true if this node template should be used for the provided node
     * data and index. If left undefined, this node will be considered the default node template to
     * use when no other when functions return true for the data.
     * For every node, there must be at least one when function that passes or an undefined to
     * default.
     * @type {?}
     */
    CdkTreeNodeDef.prototype.when;
    /** @type {?} */
    CdkTreeNodeDef.prototype.template;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90cmVlL25vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckQ7QUFFRTtBQUFnRDtBQUNyQzs7QUFBYixNQUFNLE9BQU8sd0JBQXdCO0FBQUc7QUFDbkM7QUFDTDtBQUFRLElBV04sWUFBWSxJQUFPO0FBQ3JCLFFBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDMUIsSUFBRSxDQUFDO0FBQ0gsQ0FBQztBQUNEO0FBRVE7QUFBUTtBQUNmO0FBQWlCO0FBQVEsSUFsQnhCLDZDQUFhO0FBQ2Y7QUFDTztBQUNGO0FBRUQ7QUFBUSxJQUZWLHlDQUFjO0FBQ2hCO0FBQ087QUFDRjtBQUVGO0FBQVEsSUFGVCx5Q0FBZTtBQUNqQjtBQUNPO0FBQ0Y7QUFFRjtBQUFRLElBRlQseUNBQWU7QUFDakI7QUFDQztBQUFJO0FBQ2dCO0FBTW9CO0FBQWU7QUFReEQsTUFBTSxPQUFPLGNBQWM7QUFBRztBQUN6QjtBQUNnQjtBQUEyQjtBQUFRLElBU3RELFlBQW1CLFFBQTBCO0FBQUksUUFBOUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7QUFBQyxJQUFFLENBQUM7QUFDbkQ7MENBbEJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsa0JBQWtCLGtCQUM1QixNQUFNLEVBQUU7WUFDTiwwQkFBMEIsa0JBQzNCLGVBQ0YsNkZBQ0k7QUFBQztBQUFtQjtBQUVDLFlBbENQLFdBQVc7QUFBRzs7Ozs7Ozs7OzRFQUFFO0FBQUM7QUFBYTtBQUdoRDtBQUVJO0FBTVM7QUFHVTtBQUlDO0FBS3RCO0FBQWlCO0FBQVEsSUFpQjFCLDhCQUE4QztBQUNoRDtBQUNvQixJQUNOLGtDQUFpQztBQUFDO0FBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG4vKiogQ29udGV4dCBwcm92aWRlZCB0byB0aGUgdHJlZSBub2RlIGNvbXBvbmVudC4gKi9cbmV4cG9ydCBjbGFzcyBDZGtUcmVlTm9kZU91dGxldENvbnRleHQ8VD4ge1xuICAvKiogRGF0YSBmb3IgdGhlIG5vZGUuICovXG4gICRpbXBsaWNpdDogVDtcblxuICAvKiogRGVwdGggb2YgdGhlIG5vZGUuICovXG4gIGxldmVsOiBudW1iZXI7XG5cbiAgLyoqIEluZGV4IGxvY2F0aW9uIG9mIHRoZSBub2RlLiAqL1xuICBpbmRleD86IG51bWJlcjtcblxuICAvKiogTGVuZ3RoIG9mIHRoZSBudW1iZXIgb2YgdG90YWwgZGF0YU5vZGVzLiAqL1xuICBjb3VudD86IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBUKSB7XG4gICAgdGhpcy4kaW1wbGljaXQgPSBkYXRhO1xuICB9XG59XG5cbi8qKlxuICogRGF0YSBub2RlIGRlZmluaXRpb24gZm9yIHRoZSBDZGtUcmVlLlxuICogQ2FwdHVyZXMgdGhlIG5vZGUncyB0ZW1wbGF0ZSBhbmQgYSB3aGVuIHByZWRpY2F0ZSB0aGF0IGRlc2NyaWJlcyB3aGVuIHRoaXMgbm9kZSBzaG91bGQgYmUgdXNlZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1RyZWVOb2RlRGVmXScsXG4gIGlucHV0czogW1xuICAgICd3aGVuOiBjZGtUcmVlTm9kZURlZldoZW4nXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENka1RyZWVOb2RlRGVmPFQ+IHtcbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRoYXQgc2hvdWxkIHJldHVybiB0cnVlIGlmIHRoaXMgbm9kZSB0ZW1wbGF0ZSBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIHByb3ZpZGVkIG5vZGVcbiAgICogZGF0YSBhbmQgaW5kZXguIElmIGxlZnQgdW5kZWZpbmVkLCB0aGlzIG5vZGUgd2lsbCBiZSBjb25zaWRlcmVkIHRoZSBkZWZhdWx0IG5vZGUgdGVtcGxhdGUgdG9cbiAgICogdXNlIHdoZW4gbm8gb3RoZXIgd2hlbiBmdW5jdGlvbnMgcmV0dXJuIHRydWUgZm9yIHRoZSBkYXRhLlxuICAgKiBGb3IgZXZlcnkgbm9kZSwgdGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgd2hlbiBmdW5jdGlvbiB0aGF0IHBhc3NlcyBvciBhbiB1bmRlZmluZWQgdG9cbiAgICogZGVmYXVsdC5cbiAgICovXG4gIHdoZW46IChpbmRleDogbnVtYmVyLCBub2RlRGF0YTogVCkgPT4gYm9vbGVhbjtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG59XG4iXX0=