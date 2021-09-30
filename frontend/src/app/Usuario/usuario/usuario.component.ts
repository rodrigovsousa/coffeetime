import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/usuario/usuario';


@Component({
    templateUrl: './tablecoltoggledemo.html'
})
export class TableColToggleDemo implements OnInit {

    usuarios: Usuario[];

    cols: any[];

    _selectedColumns: any[];

    constructor() { }

    ngOnInit() {
        this.usuarios(data => this.usuarios = data);

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];

        this._selectedColumns = this.cols;
    }

    @Input() get selectedColumns(): any[] {
        return this._selectedColumns;
    }

    set selectedColumns(val: any[]) {
        //restore original order
        this._selectedColumns = this.cols.filter(col => val.includes(col));
    }
}