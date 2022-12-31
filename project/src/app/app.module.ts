import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from "./core/core.module";
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { ProductDetailsModule } from './features/product-details/product-details.module';

import { ConfirmationDialogComponent } from './shared/modals/confirmation-dialog/confirmation-dialog.component';




@NgModule({
    declarations: [
        AppComponent,
        ConfirmationDialogComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        CoreModule,
        NgbModule,
        NgbModalModule
    ]
})
export class AppModule { }
