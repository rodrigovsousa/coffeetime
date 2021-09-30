/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/cell.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ContentChild, Directive, ElementRef, Input, TemplateRef } from '@angular/core';
import { mixinHasStickyInput } from './can-stick';
/**
 * Base interface for a cell definition. Captures a column's cell template definition.
 * @record
 */
import * as ɵngcc0 from '@angular/core';
export function CellDef() { }
if (false) {
    /** @type {?} */
    CellDef.prototype.template;
}
/**
 * Cell definition for a CDK table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
export class CdkCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkCellDef.ɵfac = function CdkCellDef_Factory(t) { return new (t || CdkCellDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkCellDef, selectors: [["", "cdkCellDef", ""]] });
/** @nocollapse */
CdkCellDef.ctorParameters = () => [
    { type: TemplateRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkCellDef, [{
        type: Directive,
        args: [{ selector: '[cdkCellDef]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    CdkCellDef.prototype.template;
}
/**
 * Header cell definition for a CDK table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
export class CdkHeaderCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkHeaderCellDef.ɵfac = function CdkHeaderCellDef_Factory(t) { return new (t || CdkHeaderCellDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkHeaderCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkHeaderCellDef, selectors: [["", "cdkHeaderCellDef", ""]] });
/** @nocollapse */
CdkHeaderCellDef.ctorParameters = () => [
    { type: TemplateRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkHeaderCellDef, [{
        type: Directive,
        args: [{ selector: '[cdkHeaderCellDef]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    CdkHeaderCellDef.prototype.template;
}
/**
 * Footer cell definition for a CDK table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
export class CdkFooterCellDef {
    /**
     * @param {?} template
     */
    constructor(/** @docs-private */ template) {
        this.template = template;
    }
}
CdkFooterCellDef.ɵfac = function CdkFooterCellDef_Factory(t) { return new (t || CdkFooterCellDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
CdkFooterCellDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkFooterCellDef, selectors: [["", "cdkFooterCellDef", ""]] });
/** @nocollapse */
CdkFooterCellDef.ctorParameters = () => [
    { type: TemplateRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkFooterCellDef, [{
        type: Directive,
        args: [{ selector: '[cdkFooterCellDef]' }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    CdkFooterCellDef.prototype.template;
}
// Boilerplate for applying mixins to CdkColumnDef.
/**
 * \@docs-private
 */
class CdkColumnDefBase {
}
/** @type {?} */
const _CdkColumnDefBase = mixinHasStickyInput(CdkColumnDefBase);
/**
 * Column definition for the CDK table.
 * Defines a set of cells available for a table column.
 */
export class CdkColumnDef extends _CdkColumnDefBase {
    constructor() {
        super(...arguments);
        this._stickyEnd = false;
    }
    /**
     * Unique name for this column.
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        // If the directive is set without a name (updated programatically), then this setter will
        // trigger with an empty string and should not overwrite the programatically set value.
        if (!name) {
            return;
        }
        this._name = name;
        this.cssClassFriendlyName = name.replace(/[^a-z0-9_-]/ig, '-');
    }
    /**
     * Whether this column should be sticky positioned on the end of the row. Should make sure
     * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
     * has been changed.
     * @return {?}
     */
    get stickyEnd() {
        return this._stickyEnd;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set stickyEnd(v) {
        /** @type {?} */
        const prevValue = this._stickyEnd;
        this._stickyEnd = coerceBooleanProperty(v);
        this._hasStickyChanged = prevValue !== this._stickyEnd;
    }
}
CdkColumnDef.ɵfac = function CdkColumnDef_Factory(t) { return ɵCdkColumnDef_BaseFactory(t || CdkColumnDef); };
CdkColumnDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkColumnDef, selectors: [["", "cdkColumnDef", ""]], contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkCellDef, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkHeaderCellDef, true);
        ɵngcc0.ɵɵcontentQuery(dirIndex, CdkFooterCellDef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.cell = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.headerCell = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.footerCell = _t.first);
    } }, inputs: { sticky: "sticky", name: ["cdkColumnDef", "name"], stickyEnd: "stickyEnd" }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
CdkColumnDef.propDecorators = {
    name: [{ type: Input, args: ['cdkColumnDef',] }],
    stickyEnd: [{ type: Input, args: ['stickyEnd',] }],
    cell: [{ type: ContentChild, args: [CdkCellDef,] }],
    headerCell: [{ type: ContentChild, args: [CdkHeaderCellDef,] }],
    footerCell: [{ type: ContentChild, args: [CdkFooterCellDef,] }]
};
const ɵCdkColumnDef_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(CdkColumnDef);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkColumnDef, [{
        type: Directive,
        args: [{
                selector: '[cdkColumnDef]',
                inputs: ['sticky'],
                providers: [{ provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: CdkColumnDef }]
            }]
    }], null, { name: [{
            type: Input,
            args: ['cdkColumnDef']
        }], stickyEnd: [{
            type: Input,
            args: ['stickyEnd']
        }], cell: [{
            type: ContentChild,
            args: [CdkCellDef]
        }], headerCell: [{
            type: ContentChild,
            args: [CdkHeaderCellDef]
        }], footerCell: [{
            type: ContentChild,
            args: [CdkFooterCellDef]
        }] }); })();
if (false) {
    /** @type {?} */
    CdkColumnDef.ngAcceptInputType_sticky;
    /** @type {?} */
    CdkColumnDef.ngAcceptInputType_stickyEnd;
    /** @type {?} */
    CdkColumnDef.prototype._name;
    /** @type {?} */
    CdkColumnDef.prototype._stickyEnd;
    /**
     * \@docs-private
     * @type {?}
     */
    CdkColumnDef.prototype.cell;
    /**
     * \@docs-private
     * @type {?}
     */
    CdkColumnDef.prototype.headerCell;
    /**
     * \@docs-private
     * @type {?}
     */
    CdkColumnDef.prototype.footerCell;
    /**
     * Transformed version of the column name that can be used as part of a CSS classname. Excludes
     * all non-alphanumeric characters and the special characters '-' and '_'. Any characters that
     * do not match are replaced by the '-' character.
     * @type {?}
     */
    CdkColumnDef.prototype.cssClassFriendlyName;
}
/**
 * Base class for the cells. Adds a CSS classname that identifies the column it renders in.
 */
export class BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        /** @type {?} */
        const columnClassName = `cdk-column-${columnDef.cssClassFriendlyName}`;
        elementRef.nativeElement.classList.add(columnClassName);
    }
}
/**
 * Header cell template container that adds the right classes and role.
 */
export class CdkHeaderCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkHeaderCell.ɵfac = function CdkHeaderCell_Factory(t) { return new (t || CdkHeaderCell)(ɵngcc0.ɵɵdirectiveInject(CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkHeaderCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkHeaderCell, selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]], hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
CdkHeaderCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkHeaderCell, [{
        type: Directive,
        args: [{
                selector: 'cdk-header-cell, th[cdk-header-cell]',
                host: {
                    'class': 'cdk-header-cell',
                    'role': 'columnheader'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
/**
 * Footer cell template container that adds the right classes and role.
 */
export class CdkFooterCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkFooterCell.ɵfac = function CdkFooterCell_Factory(t) { return new (t || CdkFooterCell)(ɵngcc0.ɵɵdirectiveInject(CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkFooterCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkFooterCell, selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-footer-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
CdkFooterCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkFooterCell, [{
        type: Directive,
        args: [{
                selector: 'cdk-footer-cell, td[cdk-footer-cell]',
                host: {
                    'class': 'cdk-footer-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();
/**
 * Cell template container that adds the right classes and role.
 */
export class CdkCell extends BaseCdkCell {
    /**
     * @param {?} columnDef
     * @param {?} elementRef
     */
    constructor(columnDef, elementRef) {
        super(columnDef, elementRef);
    }
}
CdkCell.ɵfac = function CdkCell_Factory(t) { return new (t || CdkCell)(ɵngcc0.ɵɵdirectiveInject(CdkColumnDef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CdkCell.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkCell, selectors: [["cdk-cell"], ["td", "cdk-cell", ""]], hostAttrs: ["role", "gridcell", 1, "cdk-cell"], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
CdkCell.ctorParameters = () => [
    { type: CdkColumnDef },
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkCell, [{
        type: Directive,
        args: [{
                selector: 'cdk-cell, td[cdk-cell]',
                host: {
                    'class': 'cdk-cell',
                    'role': 'gridcell'
                }
            }]
    }], function () { return [{ type: CdkColumnDef }, { type: ɵngcc0.ElementRef }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay90YWJsZS9jZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBZSxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDeEU7QUFFRTtBQUF1RjtBQUNoRjs7QUFBVCw2QkFFQztBQUNEO0FBRVE7QUFBcUIsSUFKM0IsMkJBQTJCO0FBQzdCO0FBQ0E7QUFDRztBQUNnQztBQUNzRDtBQUd6RixNQUFNLE9BQU8sVUFBVTtBQUFHO0FBQVE7QUFDbEI7QUFBUSxJQUF0QixZQUFZLG9CQUFvQixDQUFRLFFBQTBCO0FBQUksUUFBOUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7QUFBQyxJQUFFLENBQUM7QUFDeEU7c0NBSEMsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLGNBQWMsRUFBQztzR0FDaEM7QUFBQztBQUFtQjtBQUNULFlBZm9DLFdBQVc7QUFBRzs7Ozs0RUFBRTtBQUFDO0FBQWE7QUFDL0U7QUFBc0I7QUFBaUI7QUFBUSxJQWNmLDhCQUFpQztBQUFDO0FBQUU7QUFFdkU7QUFFc0M7QUFDaUQ7QUFHdkYsTUFBTSxPQUFPLGdCQUFnQjtBQUFHO0FBQVE7QUFDeEI7QUFBUSxJQUF0QixZQUFZLG9CQUFvQixDQUFRLFFBQTBCO0FBQUksUUFBOUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7QUFBQyxJQUFFLENBQUM7QUFDeEU7NENBSEMsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLG9CQUFvQixFQUFDO3dIQUN0QztBQUFDO0FBQW1CO0FBQ1QsWUF4Qm9DLFdBQVc7QUFBRzs7Ozs0RUFBRTtBQUFDO0FBQWE7QUFDL0U7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QUNKO0FBQU8sRUFBRSxpQkFBaUIsc0JBQzFCLE1BQU0sRUFBRSxVQUFVLG1CQUNuQixlQUNGLGlKQUNJO0FBQUM7QUFBbUI7QUFDVixZQUFVLFlBQVk7QUFBSSxZQXhJUixVQUFVO0FBQUc7Ozs7Ozs7Ozs7bUdBQUU7QUFBQztBQUFJO0FBQ3RCO0FBb0ovQixNQUFNLE9BQU8sT0FBUSxTQUFRLFdBQVc7QUFDeEM7QUFBUTtBQUE0QjtBQUNwQztBQUFRLElBRE4sWUFBWSxTQUF1QixFQUFFLFVBQXNCO0FBQzdELFFBQUksS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNqQyxJQUFFLENBQUM7QUFDSDttQ0FYQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHdCQUF3QixrQkFDbEMsSUFBSSxFQUFFLHNCQUNKLE9BQU87QUFBRSxVQUFVLHNCQUNuQixNQUFNLEVBQUUsVUFBVSxtQkFDbkIsZUFDRix5SEFDSTtBQUFDO0FBQW1CO0FBQ1YsWUFBVSxZQUFZO0FBQUksWUF0SlIsVUFBVTtBQUFHOzs7Ozs7Ozs7O21HQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7Q29udGVudENoaWxkLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhblN0aWNrLCBDYW5TdGlja0N0b3IsIG1peGluSGFzU3RpY2t5SW5wdXR9IGZyb20gJy4vY2FuLXN0aWNrJztcblxuXG4vKiogQmFzZSBpbnRlcmZhY2UgZm9yIGEgY2VsbCBkZWZpbml0aW9uLiBDYXB0dXJlcyBhIGNvbHVtbidzIGNlbGwgdGVtcGxhdGUgZGVmaW5pdGlvbi4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbERlZiB7XG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xufVxuXG4vKipcbiAqIENlbGwgZGVmaW5pdGlvbiBmb3IgYSBDREsgdGFibGUuXG4gKiBDYXB0dXJlcyB0aGUgdGVtcGxhdGUgb2YgYSBjb2x1bW4ncyBkYXRhIHJvdyBjZWxsIGFzIHdlbGwgYXMgY2VsbC1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tjZGtDZWxsRGVmXSd9KVxuZXhwb3J0IGNsYXNzIENka0NlbGxEZWYgaW1wbGVtZW50cyBDZWxsRGVmIHtcbiAgY29uc3RydWN0b3IoLyoqIEBkb2NzLXByaXZhdGUgKi8gcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG4vKipcbiAqIEhlYWRlciBjZWxsIGRlZmluaXRpb24gZm9yIGEgQ0RLIHRhYmxlLlxuICogQ2FwdHVyZXMgdGhlIHRlbXBsYXRlIG9mIGEgY29sdW1uJ3MgaGVhZGVyIGNlbGwgYW5kIGFzIHdlbGwgYXMgY2VsbC1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tjZGtIZWFkZXJDZWxsRGVmXSd9KVxuZXhwb3J0IGNsYXNzIENka0hlYWRlckNlbGxEZWYgaW1wbGVtZW50cyBDZWxsRGVmIHtcbiAgY29uc3RydWN0b3IoLyoqIEBkb2NzLXByaXZhdGUgKi8gcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG4vKipcbiAqIEZvb3RlciBjZWxsIGRlZmluaXRpb24gZm9yIGEgQ0RLIHRhYmxlLlxuICogQ2FwdHVyZXMgdGhlIHRlbXBsYXRlIG9mIGEgY29sdW1uJ3MgZm9vdGVyIGNlbGwgYW5kIGFzIHdlbGwgYXMgY2VsbC1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tjZGtGb290ZXJDZWxsRGVmXSd9KVxuZXhwb3J0IGNsYXNzIENka0Zvb3RlckNlbGxEZWYgaW1wbGVtZW50cyBDZWxsRGVmIHtcbiAgY29uc3RydWN0b3IoLyoqIEBkb2NzLXByaXZhdGUgKi8gcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuXG4vLyBCb2lsZXJwbGF0ZSBmb3IgYXBwbHlpbmcgbWl4aW5zIHRvIENka0NvbHVtbkRlZi5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5jbGFzcyBDZGtDb2x1bW5EZWZCYXNlIHt9XG5jb25zdCBfQ2RrQ29sdW1uRGVmQmFzZTogQ2FuU3RpY2tDdG9yJnR5cGVvZiBDZGtDb2x1bW5EZWZCYXNlID1cbiAgICBtaXhpbkhhc1N0aWNreUlucHV0KENka0NvbHVtbkRlZkJhc2UpO1xuXG4vKipcbiAqIENvbHVtbiBkZWZpbml0aW9uIGZvciB0aGUgQ0RLIHRhYmxlLlxuICogRGVmaW5lcyBhIHNldCBvZiBjZWxscyBhdmFpbGFibGUgZm9yIGEgdGFibGUgY29sdW1uLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrQ29sdW1uRGVmXScsXG4gIGlucHV0czogWydzdGlja3knXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6ICdNQVRfU09SVF9IRUFERVJfQ09MVU1OX0RFRicsIHVzZUV4aXN0aW5nOiBDZGtDb2x1bW5EZWZ9XSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQ29sdW1uRGVmIGV4dGVuZHMgX0Nka0NvbHVtbkRlZkJhc2UgaW1wbGVtZW50cyBDYW5TdGljayB7XG4gIC8qKiBVbmlxdWUgbmFtZSBmb3IgdGhpcyBjb2x1bW4uICovXG4gIEBJbnB1dCgnY2RrQ29sdW1uRGVmJylcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAvLyBJZiB0aGUgZGlyZWN0aXZlIGlzIHNldCB3aXRob3V0IGEgbmFtZSAodXBkYXRlZCBwcm9ncmFtYXRpY2FsbHkpLCB0aGVuIHRoaXMgc2V0dGVyIHdpbGxcbiAgICAvLyB0cmlnZ2VyIHdpdGggYW4gZW1wdHkgc3RyaW5nIGFuZCBzaG91bGQgbm90IG92ZXJ3cml0ZSB0aGUgcHJvZ3JhbWF0aWNhbGx5IHNldCB2YWx1ZS5cbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNzc0NsYXNzRnJpZW5kbHlOYW1lID0gbmFtZS5yZXBsYWNlKC9bXmEtejAtOV8tXS9pZywgJy0nKTtcbiAgfVxuICBfbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgY29sdW1uIHNob3VsZCBiZSBzdGlja3kgcG9zaXRpb25lZCBvbiB0aGUgZW5kIG9mIHRoZSByb3cuIFNob3VsZCBtYWtlIHN1cmVcbiAgICogdGhhdCBpdCBtaW1pY3MgdGhlIGBDYW5TdGlja2AgbWl4aW4gc3VjaCB0aGF0IGBfaGFzU3RpY2t5Q2hhbmdlZGAgaXMgc2V0IHRvIHRydWUgaWYgdGhlIHZhbHVlXG4gICAqIGhhcyBiZWVuIGNoYW5nZWQuXG4gICAqL1xuICBASW5wdXQoJ3N0aWNreUVuZCcpXG4gIGdldCBzdGlja3lFbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3N0aWNreUVuZDtcbiAgfVxuICBzZXQgc3RpY2t5RW5kKHY6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLl9zdGlja3lFbmQ7XG4gICAgdGhpcy5fc3RpY2t5RW5kID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICAgIHRoaXMuX2hhc1N0aWNreUNoYW5nZWQgPSBwcmV2VmFsdWUgIT09IHRoaXMuX3N0aWNreUVuZDtcbiAgfVxuICBfc3RpY2t5RW5kOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgQENvbnRlbnRDaGlsZChDZGtDZWxsRGVmKSBjZWxsOiBDZGtDZWxsRGVmO1xuXG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIEBDb250ZW50Q2hpbGQoQ2RrSGVhZGVyQ2VsbERlZikgaGVhZGVyQ2VsbDogQ2RrSGVhZGVyQ2VsbERlZjtcblxuICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICBAQ29udGVudENoaWxkKENka0Zvb3RlckNlbGxEZWYpIGZvb3RlckNlbGw6IENka0Zvb3RlckNlbGxEZWY7XG5cbiAgLyoqXG4gICAqIFRyYW5zZm9ybWVkIHZlcnNpb24gb2YgdGhlIGNvbHVtbiBuYW1lIHRoYXQgY2FuIGJlIHVzZWQgYXMgcGFydCBvZiBhIENTUyBjbGFzc25hbWUuIEV4Y2x1ZGVzXG4gICAqIGFsbCBub24tYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgYW5kIHRoZSBzcGVjaWFsIGNoYXJhY3RlcnMgJy0nIGFuZCAnXycuIEFueSBjaGFyYWN0ZXJzIHRoYXRcbiAgICogZG8gbm90IG1hdGNoIGFyZSByZXBsYWNlZCBieSB0aGUgJy0nIGNoYXJhY3Rlci5cbiAgICovXG4gIGNzc0NsYXNzRnJpZW5kbHlOYW1lOiBzdHJpbmc7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0aWNreTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RpY2t5RW5kOiBCb29sZWFuSW5wdXQ7XG59XG5cbi8qKiBCYXNlIGNsYXNzIGZvciB0aGUgY2VsbHMuIEFkZHMgYSBDU1MgY2xhc3NuYW1lIHRoYXQgaWRlbnRpZmllcyB0aGUgY29sdW1uIGl0IHJlbmRlcnMgaW4uICovXG5leHBvcnQgY2xhc3MgQmFzZUNka0NlbGwge1xuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGNvbnN0IGNvbHVtbkNsYXNzTmFtZSA9IGBjZGstY29sdW1uLSR7Y29sdW1uRGVmLmNzc0NsYXNzRnJpZW5kbHlOYW1lfWA7XG4gICAgZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoY29sdW1uQ2xhc3NOYW1lKTtcbiAgfVxufVxuXG4vKiogSGVhZGVyIGNlbGwgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgYWRkcyB0aGUgcmlnaHQgY2xhc3NlcyBhbmQgcm9sZS4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2Nkay1oZWFkZXItY2VsbCwgdGhbY2RrLWhlYWRlci1jZWxsXScsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnY2RrLWhlYWRlci1jZWxsJyxcbiAgICAncm9sZSc6ICdjb2x1bW5oZWFkZXInLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDZGtIZWFkZXJDZWxsIGV4dGVuZHMgQmFzZUNka0NlbGwge1xuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gIH1cbn1cblxuLyoqIEZvb3RlciBjZWxsIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGFkZHMgdGhlIHJpZ2h0IGNsYXNzZXMgYW5kIHJvbGUuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjZGstZm9vdGVyLWNlbGwsIHRkW2Nkay1mb290ZXItY2VsbF0nLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2Nkay1mb290ZXItY2VsbCcsXG4gICAgJ3JvbGUnOiAnZ3JpZGNlbGwnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDZGtGb290ZXJDZWxsIGV4dGVuZHMgQmFzZUNka0NlbGwge1xuICBjb25zdHJ1Y3Rvcihjb2x1bW5EZWY6IENka0NvbHVtbkRlZiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGNvbHVtbkRlZiwgZWxlbWVudFJlZik7XG4gIH1cbn1cblxuLyoqIENlbGwgdGVtcGxhdGUgY29udGFpbmVyIHRoYXQgYWRkcyB0aGUgcmlnaHQgY2xhc3NlcyBhbmQgcm9sZS4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2Nkay1jZWxsLCB0ZFtjZGstY2VsbF0nLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2Nkay1jZWxsJyxcbiAgICAncm9sZSc6ICdncmlkY2VsbCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENka0NlbGwgZXh0ZW5kcyBCYXNlQ2RrQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKGNvbHVtbkRlZjogQ2RrQ29sdW1uRGVmLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgc3VwZXIoY29sdW1uRGVmLCBlbGVtZW50UmVmKTtcbiAgfVxufVxuIl19