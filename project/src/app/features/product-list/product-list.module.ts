import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductListService } from './services/product-list.service';
import { customCurrencyPipe } from '../../shared/pipes/customCurrency.pipe';

import { SearchModule } from 'src/app/module/search/search.module';
import { HighlightDirective } from './directives/higlight.directive';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
    declarations: [
        ProductListComponent,
        customCurrencyPipe,
        HighlightDirective
    ],
    providers: [ProductListService, NgbActiveModal],
    imports: [
        CommonModule,
        ProductListRoutingModule,
        SearchModule
    ]
})
export class ProductListModule { }
