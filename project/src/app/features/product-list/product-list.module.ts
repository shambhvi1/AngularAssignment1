import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, NgIf } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductListService } from './services/product-list.service';
import { Currency1Pipe } from '../../shared/pipes/currency.pipe';

import { SearchModule } from 'src/app/module/search/search.module';
import { HighlightDirective } from './directives/higlight.directive';



@NgModule({
    declarations: [
        ProductListComponent,
        Currency1Pipe,
        HighlightDirective
    ],
    providers: [ProductListService],
    imports: [
        CommonModule,
        ProductListRoutingModule,
        SearchModule
    ]
})
export class ProductListModule { }
