/**
 * @fileoverview added by tsickle
 * Generated from: src/cdk/drag-drop/drag-drop-module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { CdkDropList } from './directives/drop-list';
import { CdkDropListGroup } from './directives/drop-list-group';
import { CdkDrag } from './directives/drag';
import { CdkDragHandle } from './directives/drag-handle';
import { CdkDragPreview } from './directives/drag-preview';
import { CdkDragPlaceholder } from './directives/drag-placeholder';
import { DragDrop } from './drag-drop';
import * as ɵngcc0 from '@angular/core';
export class DragDropModule {
}
DragDropModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DragDropModule });
DragDropModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DragDropModule_Factory(t) { return new (t || DragDropModule)(); }, providers: [
        DragDrop,
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DragDropModule, { declarations: function () { return [CdkDropList,
        CdkDropListGroup,
        CdkDrag,
        CdkDragHandle,
        CdkDragPreview,
        CdkDragPlaceholder]; }, exports: function () { return [CdkDropList,
        CdkDropListGroup,
        CdkDrag,
        CdkDragHandle,
        CdkDragPreview,
        CdkDragPlaceholder]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DragDropModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                exports: [
                    CdkDropList,
                    CdkDropListGroup,
                    CdkDrag,
                    CdkDragHandle,
                    CdkDragPreview,
                    CdkDragPlaceholder,
                ],
                providers: [
                    DragDrop,
                ]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1kcm9wLW1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9kcmFnLWRyb3AvZHJhZy1kcm9wLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDMUMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYSxDQUFDOztBQXVCckMsTUFBTSxPQUFPLGNBQWM7QUFBRzswQ0FyQjdCLFFBQVEsU0FBQztJQUNSLFlBQVksRUFBRSxzQkFDWixXQUFXLHNCQUNYLGdCQUFnQixzQkFDaEIsT0FBTyxzQkFDUDtPQUFhOztDQUNiLGNBQWMsc0JBQ2Qsa0JBQWtCLG1CQUNuQixrQkFDRCxPQUFPLEVBQUUsc0JBQ1AsV0FBVyxzQkFDWDthQUFnQjtTQUNoQixPQUFPO3FCQUNQO1dBQWE7U0FDYixjQUFjLHNCQUNkLGtCQUFrQjtNQUNuQixrQkFDRDtPQUFTLEVBQUU7Y0FDVCxRQUFRO2tCQUNUO1FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtEcm9wTGlzdH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Ryb3AtbGlzdCc7XG5pbXBvcnQge0Nka0Ryb3BMaXN0R3JvdXB9IGZyb20gJy4vZGlyZWN0aXZlcy9kcm9wLWxpc3QtZ3JvdXAnO1xuaW1wb3J0IHtDZGtEcmFnfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJhZyc7XG5pbXBvcnQge0Nka0RyYWdIYW5kbGV9IGZyb20gJy4vZGlyZWN0aXZlcy9kcmFnLWhhbmRsZSc7XG5pbXBvcnQge0Nka0RyYWdQcmV2aWV3fSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJhZy1wcmV2aWV3JztcbmltcG9ydCB7Q2RrRHJhZ1BsYWNlaG9sZGVyfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHJhZy1wbGFjZWhvbGRlcic7XG5pbXBvcnQge0RyYWdEcm9wfSBmcm9tICcuL2RyYWctZHJvcCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENka0Ryb3BMaXN0LFxuICAgIENka0Ryb3BMaXN0R3JvdXAsXG4gICAgQ2RrRHJhZyxcbiAgICBDZGtEcmFnSGFuZGxlLFxuICAgIENka0RyYWdQcmV2aWV3LFxuICAgIENka0RyYWdQbGFjZWhvbGRlcixcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENka0Ryb3BMaXN0LFxuICAgIENka0Ryb3BMaXN0R3JvdXAsXG4gICAgQ2RrRHJhZyxcbiAgICBDZGtEcmFnSGFuZGxlLFxuICAgIENka0RyYWdQcmV2aWV3LFxuICAgIENka0RyYWdQbGFjZWhvbGRlcixcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRHJhZ0Ryb3AsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRHJhZ0Ryb3BNb2R1bGUge31cbiJdfQ==