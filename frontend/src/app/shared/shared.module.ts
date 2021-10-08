import { NgModule } from '@angular/core';
import { AtivoPipe } from '../modulo-usuario/pipes/ativo.pipe';
import { PRIMENG_IMPORTS } from './primeng-imports';

@NgModule({
    declarations: [
        AtivoPipe
    ],
    imports: [
        PRIMENG_IMPORTS,
    ],
    providers: [],
    exports: [
        PRIMENG_IMPORTS,
        AtivoPipe
    ]
})
export class SharedModule { }
