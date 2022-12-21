import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './module/search/search.component';
import { ProductManageFormComponent } from './module/product-manage-form/product-manage-form.component';
import { NavbarModule } from "./core/navbar/navbar.module";
import { ProductDetailComponent } from './features/product-detail/product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ProductManageFormComponent,
        ProductDetailComponent,
       
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
