/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/table/row.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, Directive, IterableDiffers, TemplateRef, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { mixinHasStickyInput } from './can-stick';
/**
 * The row template that can be used by the mat-table. Should not be used outside of the
 * material library.
 * @type {?}
 */
import * as ɵngcc0 from '@angular/core';
export const CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
/**
 * Base class for the CdkHeaderRowDef and CdkRowDef that handles checking their columns inputs
 * for changes and notifying the table.
 * @abstract
 */
export class BaseRowDef {
    /**
     * @param {?} template
     * @param {?} _differs
     */
    constructor(template, _differs) {
        this.template = template;
        this._differs = _differs;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Create a new columns differ if one does not yet exist. Initialize it based on initial value
        // of the columns property or an empty array if none is provided.
        if (!this._columnsDiffer) {
            /** @type {?} */
            const columns = (changes['columns'] && changes['columns'].currentValue) || [];
            this._columnsDiffer = this._differs.find(columns).create();
            this._columnsDiffer.diff(columns);
        }
    }
    /**
     * Returns the difference between the current columns and the columns from the last diff, or null
     * if there is no difference.
     * @return {?}
     */
    getColumnsDiff() {
        return this._columnsDiffer.diff(this.columns);
    }
    /**
     * Gets this row def's relevant cell template from the provided column def.
     * @param {?} column
     * @return {?}
     */
    extractCellTemplate(column) {
        if (this instanceof CdkHeaderRowDef) {
            return column.headerCell.template;
        }
        if (this instanceof CdkFooterRowDef) {
            return column.footerCell.template;
        }
        else {
            return column.cell.template;
        }
    }
}
BaseRowDef.ɵfac = function BaseRowDef_Factory(t) { ɵngcc0.ɵɵinvalidFactory(); };
BaseRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: BaseRowDef, features: [ɵngcc0.ɵɵNgOnChangesFeature] });

if (false) {
    /**
     * The columns to be displayed on this row.
     * @type {?}
     */
    BaseRowDef.prototype.columns;
    /**
     * Differ used to check if any changes were made to the columns.
     * @type {?}
     * @protected
     */
    BaseRowDef.prototype._columnsDiffer;
    /**
     * \@docs-private
     * @type {?}
     */
    BaseRowDef.prototype.template;
    /**
     * @type {?}
     * @protected
     */
    BaseRowDef.prototype._differs;
}
// Boilerplate for applying mixins to CdkHeaderRowDef.
/**
 * \@docs-private
 */
class CdkHeaderRowDefBase extends BaseRowDef {
}
/** @type {?} */
const _CdkHeaderRowDefBase = mixinHasStickyInput(CdkHeaderRowDefBase);
/**
 * Header row definition for the CDK table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
export class CdkHeaderRowDef extends _CdkHeaderRowDefBase {
    /**
     * @param {?} template
     * @param {?} _differs
     */
    constructor(template, _differs) {
        super(template, _differs);
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkHeaderRowDef.ɵfac = function CdkHeaderRowDef_Factory(t) { return new (t || CdkHeaderRowDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers)); };
CdkHeaderRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkHeaderRowDef, selectors: [["", "cdkHeaderRowDef", ""]], inputs: { columns: ["cdkHeaderRowDef", "columns"], sticky: ["cdkHeaderRowDefSticky", "sticky"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature] });
/** @nocollapse */
CdkHeaderRowDef.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkHeaderRowDef, [{
        type: Directive,
        args: [{
                selector: '[cdkHeaderRowDef]',
                inputs: ['columns: cdkHeaderRowDef', 'sticky: cdkHeaderRowDefSticky']
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.IterableDiffers }]; }, null); })();
if (false) {
    /** @type {?} */
    CdkHeaderRowDef.ngAcceptInputType_sticky;
}
// Boilerplate for applying mixins to CdkFooterRowDef.
/**
 * \@docs-private
 */
class CdkFooterRowDefBase extends BaseRowDef {
}
/** @type {?} */
const _CdkFooterRowDefBase = mixinHasStickyInput(CdkFooterRowDefBase);
/**
 * Footer row definition for the CDK table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
export class CdkFooterRowDef extends _CdkFooterRowDefBase {
    /**
     * @param {?} template
     * @param {?} _differs
     */
    constructor(template, _differs) {
        super(template, _differs);
    }
    // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
    // Explicitly define it so that the method is called as part of the Angular lifecycle.
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
}
CdkFooterRowDef.ɵfac = function CdkFooterRowDef_Factory(t) { return new (t || CdkFooterRowDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers)); };
CdkFooterRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkFooterRowDef, selectors: [["", "cdkFooterRowDef", ""]], inputs: { columns: ["cdkFooterRowDef", "columns"], sticky: ["cdkFooterRowDefSticky", "sticky"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature, ɵngcc0.ɵɵNgOnChangesFeature] });
/** @nocollapse */
CdkFooterRowDef.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkFooterRowDef, [{
        type: Directive,
        args: [{
                selector: '[cdkFooterRowDef]',
                inputs: ['columns: cdkFooterRowDef', 'sticky: cdkFooterRowDefSticky']
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.IterableDiffers }]; }, null); })();
if (false) {
    /** @type {?} */
    CdkFooterRowDef.ngAcceptInputType_sticky;
}
/**
 * Data row definition for the CDK table.
 * Captures the header row's template and other row properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 * @template T
 */
export class CdkRowDef extends BaseRowDef {
    // TODO(andrewseguin): Add an input for providing a switch function to determine
    //   if this template should be used.
    /**
     * @param {?} template
     * @param {?} _differs
     */
    constructor(template, _differs) {
        super(template, _differs);
    }
}
CdkRowDef.ɵfac = function CdkRowDef_Factory(t) { return new (t || CdkRowDef)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.IterableDiffers)); };
CdkRowDef.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkRowDef, selectors: [["", "cdkRowDef", ""]], inputs: { columns: ["cdkRowDefColumns", "columns"], when: ["cdkRowDefWhen", "when"] }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
/** @nocollapse */
CdkRowDef.ctorParameters = () => [
    { type: TemplateRef },
    { type: IterableDiffers }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkRowDef, [{
        type: Directive,
        args: [{
                selector: '[cdkRowDef]',
                inputs: ['columns: cdkRowDefColumns', 'when: cdkRowDefWhen']
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }, { type: ɵngcc0.IterableDiffers }]; }, null); })();
if (false) {
    /**
     * Function that should return true if this row template should be used for the provided index
     * and row data. If left undefined, this row will be considered the default row template to use
     * when no other when functions return true for the data.
     * For every row, there must be at least one when function that passes or an undefined to default.
     * @type {?}
     */
    CdkRowDef.prototype.when;
}
/**
 * Context provided to the row cells when `multiTemplateDataRows` is false
 * @record
 * @template T
 */
export function CdkCellOutletRowContext() { }
if (false) {
    /**
     * Data for the row that this cell is located within.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.$implicit;
    /**
     * Index of the data object in the provided data array.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.index;
    /**
     * Length of the number of total rows.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.count;
    /**
     * True if this cell is contained in the first row.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.first;
    /**
     * True if this cell is contained in the last row.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.last;
    /**
     * True if this cell is contained in a row with an even-numbered index.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.even;
    /**
     * True if this cell is contained in a row with an odd-numbered index.
     * @type {?|undefined}
     */
    CdkCellOutletRowContext.prototype.odd;
}
/**
 * Context provided to the row cells when `multiTemplateDataRows` is true. This context is the same
 * as CdkCellOutletRowContext except that the single `index` value is replaced by `dataIndex` and
 * `renderIndex`.
 * @record
 * @template T
 */
export function CdkCellOutletMultiRowContext() { }
if (false) {
    /**
     * Data for the row that this cell is located within.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.$implicit;
    /**
     * Index of the data object in the provided data array.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.dataIndex;
    /**
     * Index location of the rendered row that this cell is located within.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.renderIndex;
    /**
     * Length of the number of total rows.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.count;
    /**
     * True if this cell is contained in the first row.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.first;
    /**
     * True if this cell is contained in the last row.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.last;
    /**
     * True if this cell is contained in a row with an even-numbered index.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.even;
    /**
     * True if this cell is contained in a row with an odd-numbered index.
     * @type {?|undefined}
     */
    CdkCellOutletMultiRowContext.prototype.odd;
}
/**
 * Outlet for rendering cells inside of a row or header row.
 * \@docs-private
 */
export class CdkCellOutlet {
    /**
     * @param {?} _viewContainer
     */
    constructor(_viewContainer) {
        this._viewContainer = _viewContainer;
        CdkCellOutlet.mostRecentCellOutlet = this;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // If this was the last outlet being rendered in the view, remove the reference
        // from the static property after it has been destroyed to avoid leaking memory.
        if (CdkCellOutlet.mostRecentCellOutlet === this) {
            CdkCellOutlet.mostRecentCellOutlet = null;
        }
    }
}
CdkCellOutlet.ɵfac = function CdkCellOutlet_Factory(t) { return new (t || CdkCellOutlet)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef)); };
CdkCellOutlet.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CdkCellOutlet, selectors: [["", "cdkCellOutlet", ""]] });
/**
 * Static property containing the latest constructed instance of this class.
 * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
 * createEmbeddedView. After one of these components are created, this property will provide
 * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
 * construct the cells with the provided context.
 */
CdkCellOutlet.mostRecentCellOutlet = null;
/** @nocollapse */
CdkCellOutlet.ctorParameters = () => [
    { type: ViewContainerRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkCellOutlet, [{
        type: Directive,
        args: [{ selector: '[cdkCellOutlet]' }]
    }], function () { return [{ type: ɵngcc0.ViewContainerRef }]; }, null); })();
if (false) {
    /**
     * Static property containing the latest constructed instance of this class.
     * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
     * createEmbeddedView. After one of these components are created, this property will provide
     * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
     * construct the cells with the provided context.
     * @type {?}
     */
    CdkCellOutlet.mostRecentCellOutlet;
    /**
     * The ordered list of cells to render within this outlet's view container
     * @type {?}
     */
    CdkCellOutlet.prototype.cells;
    /**
     * The data context to be provided to each cell
     * @type {?}
     */
    CdkCellOutlet.prototype.context;
    /** @type {?} */
    CdkCellOutlet.prototype._viewContainer;
}
/**
 * Header template container that contains the cell outlet. Adds the right class and role.
 */
export class CdkHeaderRow {
}
CdkHeaderRow.ɵfac = function CdkHeaderRow_Factory(t) { return new (t || CdkHeaderRow)(); };
CdkHeaderRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkHeaderRow, selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]], hostAttrs: ["role", "row", 1, "cdk-header-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkHeaderRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkHeaderRow, [{
        type: Component,
        args: [{
                selector: 'cdk-header-row, tr[cdk-header-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-header-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None
            }]
    }], null, null); })();
/**
 * Footer template container that contains the cell outlet. Adds the right class and role.
 */
export class CdkFooterRow {
}
CdkFooterRow.ɵfac = function CdkFooterRow_Factory(t) { return new (t || CdkFooterRow)(); };
CdkFooterRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkFooterRow, selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]], hostAttrs: ["role", "row", 1, "cdk-footer-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkFooterRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkFooterRow, [{
        type: Component,
        args: [{
                selector: 'cdk-footer-row, tr[cdk-footer-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-footer-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None
            }]
    }], null, null); })();
/**
 * Data row template container that contains the cell outlet. Adds the right class and role.
 */
export class CdkRow {
}
CdkRow.ɵfac = function CdkRow_Factory(t) { return new (t || CdkRow)(); };
CdkRow.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: CdkRow, selectors: [["cdk-row"], ["tr", "cdk-row", ""]], hostAttrs: ["role", "row", 1, "cdk-row"], decls: 1, vars: 0, consts: [["cdkCellOutlet", ""]], template: function CdkRow_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainer(0, 0);
    } }, directives: [CdkCellOutlet], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CdkRow, [{
        type: Component,
        args: [{
                selector: 'cdk-row, tr[cdk-row]',
                template: CDK_ROW_TEMPLATE,
                host: {
                    'class': 'cdk-row',
                    'role': 'row'
                },
                // See note on CdkTable for explanation on why this uses the default change detection strategy.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                encapsulation: ViewEncapsulation.None
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3RhYmxlL3Jvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxTQUFTLEVBR1QsZUFBZSxFQUlmLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDeEU7QUFBSTtBQUdtQztBQUFxQjtBQUFhOztBQUd6RSxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsNkNBQTZDO0FBQzdFO0FBQ0c7QUFDMkY7QUFDdkQ7QUFFL0I7QUFBUixNQUFNLE9BQWdCLFVBQVU7QUFBRztBQUFRO0FBQzdCO0FBQTJCO0FBQVEsSUFNL0MsWUFDZ0MsUUFBMEIsRUFBWSxRQUF5QjtBQUNqRyxRQURrQyxhQUFRLEdBQVIsUUFBUSxDQUFrQjtBQUFDLFFBQVcsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7QUFBQyxJQUNoRyxDQUFDO0FBQ0g7QUFDTztBQUEwQjtBQUMzQjtBQUFRLElBRFosV0FBVyxDQUFDLE9BQXNCO0FBQUksUUFDcEMsOEZBQThGO0FBQ2xHLFFBQUksaUVBQWlFO0FBQ3JFLFFBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDOUI7QUFBNkIsa0JBQWpCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtBQUNuRixZQUFNLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDakUsWUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4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LyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Qm9vbGVhbklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBJdGVyYWJsZUNoYW5nZXMsXG4gIEl0ZXJhYmxlRGlmZmVyLFxuICBJdGVyYWJsZURpZmZlcnMsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NhblN0aWNrLCBDYW5TdGlja0N0b3IsIG1peGluSGFzU3RpY2t5SW5wdXR9IGZyb20gJy4vY2FuLXN0aWNrJztcbmltcG9ydCB7Q2RrQ2VsbERlZiwgQ2RrQ29sdW1uRGVmfSBmcm9tICcuL2NlbGwnO1xuXG4vKipcbiAqIFRoZSByb3cgdGVtcGxhdGUgdGhhdCBjYW4gYmUgdXNlZCBieSB0aGUgbWF0LXRhYmxlLiBTaG91bGQgbm90IGJlIHVzZWQgb3V0c2lkZSBvZiB0aGVcbiAqIG1hdGVyaWFsIGxpYnJhcnkuXG4gKi9cbmV4cG9ydCBjb25zdCBDREtfUk9XX1RFTVBMQVRFID0gYDxuZy1jb250YWluZXIgY2RrQ2VsbE91dGxldD48L25nLWNvbnRhaW5lcj5gO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIHRoZSBDZGtIZWFkZXJSb3dEZWYgYW5kIENka1Jvd0RlZiB0aGF0IGhhbmRsZXMgY2hlY2tpbmcgdGhlaXIgY29sdW1ucyBpbnB1dHNcbiAqIGZvciBjaGFuZ2VzIGFuZCBub3RpZnlpbmcgdGhlIHRhYmxlLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVJvd0RlZiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKiBUaGUgY29sdW1ucyB0byBiZSBkaXNwbGF5ZWQgb24gdGhpcyByb3cuICovXG4gIGNvbHVtbnM6IEl0ZXJhYmxlPHN0cmluZz47XG5cbiAgLyoqIERpZmZlciB1c2VkIHRvIGNoZWNrIGlmIGFueSBjaGFuZ2VzIHdlcmUgbWFkZSB0byB0aGUgY29sdW1ucy4gKi9cbiAgcHJvdGVjdGVkIF9jb2x1bW5zRGlmZmVyOiBJdGVyYWJsZURpZmZlcjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgLyoqIEBkb2NzLXByaXZhdGUgKi8gcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcm90ZWN0ZWQgX2RpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycykge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBjb2x1bW5zIGRpZmZlciBpZiBvbmUgZG9lcyBub3QgeWV0IGV4aXN0LiBJbml0aWFsaXplIGl0IGJhc2VkIG9uIGluaXRpYWwgdmFsdWVcbiAgICAvLyBvZiB0aGUgY29sdW1ucyBwcm9wZXJ0eSBvciBhbiBlbXB0eSBhcnJheSBpZiBub25lIGlzIHByb3ZpZGVkLlxuICAgIGlmICghdGhpcy5fY29sdW1uc0RpZmZlcikge1xuICAgICAgY29uc3QgY29sdW1ucyA9IChjaGFuZ2VzWydjb2x1bW5zJ10gJiYgY2hhbmdlc1snY29sdW1ucyddLmN1cnJlbnRWYWx1ZSkgfHwgW107XG4gICAgICB0aGlzLl9jb2x1bW5zRGlmZmVyID0gdGhpcy5fZGlmZmVycy5maW5kKGNvbHVtbnMpLmNyZWF0ZSgpO1xuICAgICAgdGhpcy5fY29sdW1uc0RpZmZlci5kaWZmKGNvbHVtbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGN1cnJlbnQgY29sdW1ucyBhbmQgdGhlIGNvbHVtbnMgZnJvbSB0aGUgbGFzdCBkaWZmLCBvciBudWxsXG4gICAqIGlmIHRoZXJlIGlzIG5vIGRpZmZlcmVuY2UuXG4gICAqL1xuICBnZXRDb2x1bW5zRGlmZigpOiBJdGVyYWJsZUNoYW5nZXM8YW55PnxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1uc0RpZmZlci5kaWZmKHRoaXMuY29sdW1ucyk7XG4gIH1cblxuICAvKiogR2V0cyB0aGlzIHJvdyBkZWYncyByZWxldmFudCBjZWxsIHRlbXBsYXRlIGZyb20gdGhlIHByb3ZpZGVkIGNvbHVtbiBkZWYuICovXG4gIGV4dHJhY3RDZWxsVGVtcGxhdGUoY29sdW1uOiBDZGtDb2x1bW5EZWYpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIENka0hlYWRlclJvd0RlZikge1xuICAgICAgcmV0dXJuIGNvbHVtbi5oZWFkZXJDZWxsLnRlbXBsYXRlO1xuICAgIH1cbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIENka0Zvb3RlclJvd0RlZikge1xuICAgICAgcmV0dXJuIGNvbHVtbi5mb290ZXJDZWxsLnRlbXBsYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29sdW1uLmNlbGwudGVtcGxhdGU7XG4gICAgfVxuICB9XG59XG5cbi8vIEJvaWxlcnBsYXRlIGZvciBhcHBseWluZyBtaXhpbnMgdG8gQ2RrSGVhZGVyUm93RGVmLlxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNsYXNzIENka0hlYWRlclJvd0RlZkJhc2UgZXh0ZW5kcyBCYXNlUm93RGVmIHt9XG5jb25zdCBfQ2RrSGVhZGVyUm93RGVmQmFzZTogQ2FuU3RpY2tDdG9yJnR5cGVvZiBDZGtIZWFkZXJSb3dEZWZCYXNlID1cbiAgICBtaXhpbkhhc1N0aWNreUlucHV0KENka0hlYWRlclJvd0RlZkJhc2UpO1xuXG4vKipcbiAqIEhlYWRlciByb3cgZGVmaW5pdGlvbiBmb3IgdGhlIENESyB0YWJsZS5cbiAqIENhcHR1cmVzIHRoZSBoZWFkZXIgcm93J3MgdGVtcGxhdGUgYW5kIG90aGVyIGhlYWRlciBwcm9wZXJ0aWVzIHN1Y2ggYXMgdGhlIGNvbHVtbnMgdG8gZGlzcGxheS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka0hlYWRlclJvd0RlZl0nLFxuICBpbnB1dHM6IFsnY29sdW1uczogY2RrSGVhZGVyUm93RGVmJywgJ3N0aWNreTogY2RrSGVhZGVyUm93RGVmU3RpY2t5J10sXG59KVxuZXhwb3J0IGNsYXNzIENka0hlYWRlclJvd0RlZiBleHRlbmRzIF9DZGtIZWFkZXJSb3dEZWZCYXNlIGltcGxlbWVudHMgQ2FuU3RpY2ssIE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzKSB7XG4gICAgc3VwZXIodGVtcGxhdGUsIF9kaWZmZXJzKTtcbiAgfVxuXG4gIC8vIFByZXJlbmRlciBmYWlscyB0byByZWNvZ25pemUgdGhhdCBuZ09uQ2hhbmdlcyBpbiBhIHBhcnQgb2YgdGhpcyBjbGFzcyB0aHJvdWdoIGluaGVyaXRhbmNlLlxuICAvLyBFeHBsaWNpdGx5IGRlZmluZSBpdCBzbyB0aGF0IHRoZSBtZXRob2QgaXMgY2FsbGVkIGFzIHBhcnQgb2YgdGhlIEFuZ3VsYXIgbGlmZWN5Y2xlLlxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RpY2t5OiBCb29sZWFuSW5wdXQ7XG59XG5cbi8vIEJvaWxlcnBsYXRlIGZvciBhcHBseWluZyBtaXhpbnMgdG8gQ2RrRm9vdGVyUm93RGVmLlxuLyoqIEBkb2NzLXByaXZhdGUgKi9cbmNsYXNzIENka0Zvb3RlclJvd0RlZkJhc2UgZXh0ZW5kcyBCYXNlUm93RGVmIHt9XG5jb25zdCBfQ2RrRm9vdGVyUm93RGVmQmFzZTogQ2FuU3RpY2tDdG9yJnR5cGVvZiBDZGtGb290ZXJSb3dEZWZCYXNlID1cbiAgICBtaXhpbkhhc1N0aWNreUlucHV0KENka0Zvb3RlclJvd0RlZkJhc2UpO1xuXG4vKipcbiAqIEZvb3RlciByb3cgZGVmaW5pdGlvbiBmb3IgdGhlIENESyB0YWJsZS5cbiAqIENhcHR1cmVzIHRoZSBmb290ZXIgcm93J3MgdGVtcGxhdGUgYW5kIG90aGVyIGZvb3RlciBwcm9wZXJ0aWVzIHN1Y2ggYXMgdGhlIGNvbHVtbnMgdG8gZGlzcGxheS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka0Zvb3RlclJvd0RlZl0nLFxuICBpbnB1dHM6IFsnY29sdW1uczogY2RrRm9vdGVyUm93RGVmJywgJ3N0aWNreTogY2RrRm9vdGVyUm93RGVmU3RpY2t5J10sXG59KVxuZXhwb3J0IGNsYXNzIENka0Zvb3RlclJvd0RlZiBleHRlbmRzIF9DZGtGb290ZXJSb3dEZWZCYXNlIGltcGxlbWVudHMgQ2FuU3RpY2ssIE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBfZGlmZmVyczogSXRlcmFibGVEaWZmZXJzKSB7XG4gICAgc3VwZXIodGVtcGxhdGUsIF9kaWZmZXJzKTtcbiAgfVxuXG4gIC8vIFByZXJlbmRlciBmYWlscyB0byByZWNvZ25pemUgdGhhdCBuZ09uQ2hhbmdlcyBpbiBhIHBhcnQgb2YgdGhpcyBjbGFzcyB0aHJvdWdoIGluaGVyaXRhbmNlLlxuICAvLyBFeHBsaWNpdGx5IGRlZmluZSBpdCBzbyB0aGF0IHRoZSBtZXRob2QgaXMgY2FsbGVkIGFzIHBhcnQgb2YgdGhlIEFuZ3VsYXIgbGlmZWN5Y2xlLlxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3RpY2t5OiBCb29sZWFuSW5wdXQ7XG59XG5cbi8qKlxuICogRGF0YSByb3cgZGVmaW5pdGlvbiBmb3IgdGhlIENESyB0YWJsZS5cbiAqIENhcHR1cmVzIHRoZSBoZWFkZXIgcm93J3MgdGVtcGxhdGUgYW5kIG90aGVyIHJvdyBwcm9wZXJ0aWVzIHN1Y2ggYXMgdGhlIGNvbHVtbnMgdG8gZGlzcGxheSBhbmRcbiAqIGEgd2hlbiBwcmVkaWNhdGUgdGhhdCBkZXNjcmliZXMgd2hlbiB0aGlzIHJvdyBzaG91bGQgYmUgdXNlZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1Jvd0RlZl0nLFxuICBpbnB1dHM6IFsnY29sdW1uczogY2RrUm93RGVmQ29sdW1ucycsICd3aGVuOiBjZGtSb3dEZWZXaGVuJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka1Jvd0RlZjxUPiBleHRlbmRzIEJhc2VSb3dEZWYge1xuICAvKipcbiAgICogRnVuY3Rpb24gdGhhdCBzaG91bGQgcmV0dXJuIHRydWUgaWYgdGhpcyByb3cgdGVtcGxhdGUgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBwcm92aWRlZCBpbmRleFxuICAgKiBhbmQgcm93IGRhdGEuIElmIGxlZnQgdW5kZWZpbmVkLCB0aGlzIHJvdyB3aWxsIGJlIGNvbnNpZGVyZWQgdGhlIGRlZmF1bHQgcm93IHRlbXBsYXRlIHRvIHVzZVxuICAgKiB3aGVuIG5vIG90aGVyIHdoZW4gZnVuY3Rpb25zIHJldHVybiB0cnVlIGZvciB0aGUgZGF0YS5cbiAgICogRm9yIGV2ZXJ5IHJvdywgdGhlcmUgbXVzdCBiZSBhdCBsZWFzdCBvbmUgd2hlbiBmdW5jdGlvbiB0aGF0IHBhc3NlcyBvciBhbiB1bmRlZmluZWQgdG8gZGVmYXVsdC5cbiAgICovXG4gIHdoZW46IChpbmRleDogbnVtYmVyLCByb3dEYXRhOiBUKSA9PiBib29sZWFuO1xuXG4gIC8vIFRPRE8oYW5kcmV3c2VndWluKTogQWRkIGFuIGlucHV0IGZvciBwcm92aWRpbmcgYSBzd2l0Y2ggZnVuY3Rpb24gdG8gZGV0ZXJtaW5lXG4gIC8vICAgaWYgdGhpcyB0ZW1wbGF0ZSBzaG91bGQgYmUgdXNlZC5cbiAgY29uc3RydWN0b3IodGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sIF9kaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpIHtcbiAgICBzdXBlcih0ZW1wbGF0ZSwgX2RpZmZlcnMpO1xuICB9XG59XG5cbi8qKiBDb250ZXh0IHByb3ZpZGVkIHRvIHRoZSByb3cgY2VsbHMgd2hlbiBgbXVsdGlUZW1wbGF0ZURhdGFSb3dzYCBpcyBmYWxzZSAqL1xuZXhwb3J0IGludGVyZmFjZSBDZGtDZWxsT3V0bGV0Um93Q29udGV4dDxUPiB7XG4gIC8qKiBEYXRhIGZvciB0aGUgcm93IHRoYXQgdGhpcyBjZWxsIGlzIGxvY2F0ZWQgd2l0aGluLiAqL1xuICAkaW1wbGljaXQ/OiBUO1xuXG4gIC8qKiBJbmRleCBvZiB0aGUgZGF0YSBvYmplY3QgaW4gdGhlIHByb3ZpZGVkIGRhdGEgYXJyYXkuICovXG4gIGluZGV4PzogbnVtYmVyO1xuXG4gIC8qKiBMZW5ndGggb2YgdGhlIG51bWJlciBvZiB0b3RhbCByb3dzLiAqL1xuICBjb3VudD86IG51bWJlcjtcblxuICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIHRoZSBmaXJzdCByb3cuICovXG4gIGZpcnN0PzogYm9vbGVhbjtcblxuICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIHRoZSBsYXN0IHJvdy4gKi9cbiAgbGFzdD86IGJvb2xlYW47XG5cbiAgLyoqIFRydWUgaWYgdGhpcyBjZWxsIGlzIGNvbnRhaW5lZCBpbiBhIHJvdyB3aXRoIGFuIGV2ZW4tbnVtYmVyZWQgaW5kZXguICovXG4gIGV2ZW4/OiBib29sZWFuO1xuXG4gIC8qKiBUcnVlIGlmIHRoaXMgY2VsbCBpcyBjb250YWluZWQgaW4gYSByb3cgd2l0aCBhbiBvZGQtbnVtYmVyZWQgaW5kZXguICovXG4gIG9kZD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ29udGV4dCBwcm92aWRlZCB0byB0aGUgcm93IGNlbGxzIHdoZW4gYG11bHRpVGVtcGxhdGVEYXRhUm93c2AgaXMgdHJ1ZS4gVGhpcyBjb250ZXh0IGlzIHRoZSBzYW1lXG4gKiBhcyBDZGtDZWxsT3V0bGV0Um93Q29udGV4dCBleGNlcHQgdGhhdCB0aGUgc2luZ2xlIGBpbmRleGAgdmFsdWUgaXMgcmVwbGFjZWQgYnkgYGRhdGFJbmRleGAgYW5kXG4gKiBgcmVuZGVySW5kZXhgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENka0NlbGxPdXRsZXRNdWx0aVJvd0NvbnRleHQ8VD4ge1xuICAvKiogRGF0YSBmb3IgdGhlIHJvdyB0aGF0IHRoaXMgY2VsbCBpcyBsb2NhdGVkIHdpdGhpbi4gKi9cbiAgJGltcGxpY2l0PzogVDtcblxuICAvKiogSW5kZXggb2YgdGhlIGRhdGEgb2JqZWN0IGluIHRoZSBwcm92aWRlZCBkYXRhIGFycmF5LiAqL1xuICBkYXRhSW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqIEluZGV4IGxvY2F0aW9uIG9mIHRoZSByZW5kZXJlZCByb3cgdGhhdCB0aGlzIGNlbGwgaXMgbG9jYXRlZCB3aXRoaW4uICovXG4gIHJlbmRlckluZGV4PzogbnVtYmVyO1xuXG4gIC8qKiBMZW5ndGggb2YgdGhlIG51bWJlciBvZiB0b3RhbCByb3dzLiAqL1xuICBjb3VudD86IG51bWJlcjtcblxuICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIHRoZSBmaXJzdCByb3cuICovXG4gIGZpcnN0PzogYm9vbGVhbjtcblxuICAvKiogVHJ1ZSBpZiB0aGlzIGNlbGwgaXMgY29udGFpbmVkIGluIHRoZSBsYXN0IHJvdy4gKi9cbiAgbGFzdD86IGJvb2xlYW47XG5cbiAgLyoqIFRydWUgaWYgdGhpcyBjZWxsIGlzIGNvbnRhaW5lZCBpbiBhIHJvdyB3aXRoIGFuIGV2ZW4tbnVtYmVyZWQgaW5kZXguICovXG4gIGV2ZW4/OiBib29sZWFuO1xuXG4gIC8qKiBUcnVlIGlmIHRoaXMgY2VsbCBpcyBjb250YWluZWQgaW4gYSByb3cgd2l0aCBhbiBvZGQtbnVtYmVyZWQgaW5kZXguICovXG4gIG9kZD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogT3V0bGV0IGZvciByZW5kZXJpbmcgY2VsbHMgaW5zaWRlIG9mIGEgcm93IG9yIGhlYWRlciByb3cuXG4gKiBAZG9jcy1wcml2YXRlXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2Nka0NlbGxPdXRsZXRdJ30pXG5leHBvcnQgY2xhc3MgQ2RrQ2VsbE91dGxldCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBUaGUgb3JkZXJlZCBsaXN0IG9mIGNlbGxzIHRvIHJlbmRlciB3aXRoaW4gdGhpcyBvdXRsZXQncyB2aWV3IGNvbnRhaW5lciAqL1xuICBjZWxsczogQ2RrQ2VsbERlZltdO1xuXG4gIC8qKiBUaGUgZGF0YSBjb250ZXh0IHRvIGJlIHByb3ZpZGVkIHRvIGVhY2ggY2VsbCAqL1xuICBjb250ZXh0OiBhbnk7XG5cbiAgLyoqXG4gICAqIFN0YXRpYyBwcm9wZXJ0eSBjb250YWluaW5nIHRoZSBsYXRlc3QgY29uc3RydWN0ZWQgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcy5cbiAgICogVXNlZCBieSB0aGUgQ0RLIHRhYmxlIHdoZW4gZWFjaCBDZGtIZWFkZXJSb3cgYW5kIENka1JvdyBjb21wb25lbnQgaXMgY3JlYXRlZCB1c2luZ1xuICAgKiBjcmVhdGVFbWJlZGRlZFZpZXcuIEFmdGVyIG9uZSBvZiB0aGVzZSBjb21wb25lbnRzIGFyZSBjcmVhdGVkLCB0aGlzIHByb3BlcnR5IHdpbGwgcHJvdmlkZVxuICAgKiBhIGhhbmRsZSB0byBwcm92aWRlIHRoYXQgY29tcG9uZW50J3MgY2VsbHMgYW5kIGNvbnRleHQuIEFmdGVyIGluaXQsIHRoZSBDZGtDZWxsT3V0bGV0IHdpbGxcbiAgICogY29uc3RydWN0IHRoZSBjZWxscyB3aXRoIHRoZSBwcm92aWRlZCBjb250ZXh0LlxuICAgKi9cbiAgc3RhdGljIG1vc3RSZWNlbnRDZWxsT3V0bGV0OiBDZGtDZWxsT3V0bGV0fG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIENka0NlbGxPdXRsZXQubW9zdFJlY2VudENlbGxPdXRsZXQgPSB0aGlzO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gSWYgdGhpcyB3YXMgdGhlIGxhc3Qgb3V0bGV0IGJlaW5nIHJlbmRlcmVkIGluIHRoZSB2aWV3LCByZW1vdmUgdGhlIHJlZmVyZW5jZVxuICAgIC8vIGZyb20gdGhlIHN0YXRpYyBwcm9wZXJ0eSBhZnRlciBpdCBoYXMgYmVlbiBkZXN0cm95ZWQgdG8gYXZvaWQgbGVha2luZyBtZW1vcnkuXG4gICAgaWYgKENka0NlbGxPdXRsZXQubW9zdFJlY2VudENlbGxPdXRsZXQgPT09IHRoaXMpIHtcbiAgICAgIENka0NlbGxPdXRsZXQubW9zdFJlY2VudENlbGxPdXRsZXQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG4vKiogSGVhZGVyIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoZSBjZWxsIG91dGxldC4gQWRkcyB0aGUgcmlnaHQgY2xhc3MgYW5kIHJvbGUuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstaGVhZGVyLXJvdywgdHJbY2RrLWhlYWRlci1yb3ddJyxcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnY2RrLWhlYWRlci1yb3cnLFxuICAgICdyb2xlJzogJ3JvdycsXG4gIH0sXG4gIC8vIFNlZSBub3RlIG9uIENka1RhYmxlIGZvciBleHBsYW5hdGlvbiBvbiB3aHkgdGhpcyB1c2VzIHRoZSBkZWZhdWx0IGNoYW5nZSBkZXRlY3Rpb24gc3RyYXRlZ3kuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YWxpZGF0ZS1kZWNvcmF0b3JzXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrSGVhZGVyUm93IHtcbn1cblxuXG4vKiogRm9vdGVyIHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoZSBjZWxsIG91dGxldC4gQWRkcyB0aGUgcmlnaHQgY2xhc3MgYW5kIHJvbGUuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZm9vdGVyLXJvdywgdHJbY2RrLWZvb3Rlci1yb3ddJyxcbiAgdGVtcGxhdGU6IENES19ST1dfVEVNUExBVEUsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnY2RrLWZvb3Rlci1yb3cnLFxuICAgICdyb2xlJzogJ3JvdycsXG4gIH0sXG4gIC8vIFNlZSBub3RlIG9uIENka1RhYmxlIGZvciBleHBsYW5hdGlvbiBvbiB3aHkgdGhpcyB1c2VzIHRoZSBkZWZhdWx0IGNoYW5nZSBkZXRlY3Rpb24gc3RyYXRlZ3kuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YWxpZGF0ZS1kZWNvcmF0b3JzXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRm9vdGVyUm93IHtcbn1cblxuLyoqIERhdGEgcm93IHRlbXBsYXRlIGNvbnRhaW5lciB0aGF0IGNvbnRhaW5zIHRoZSBjZWxsIG91dGxldC4gQWRkcyB0aGUgcmlnaHQgY2xhc3MgYW5kIHJvbGUuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstcm93LCB0cltjZGstcm93XScsXG4gIHRlbXBsYXRlOiBDREtfUk9XX1RFTVBMQVRFLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2Nkay1yb3cnLFxuICAgICdyb2xlJzogJ3JvdycsXG4gIH0sXG4gIC8vIFNlZSBub3RlIG9uIENka1RhYmxlIGZvciBleHBsYW5hdGlvbiBvbiB3aHkgdGhpcyB1c2VzIHRoZSBkZWZhdWx0IGNoYW5nZSBkZXRlY3Rpb24gc3RyYXRlZ3kuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YWxpZGF0ZS1kZWNvcmF0b3JzXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUm93IHtcbn1cbiJdfQ==