import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationDialogRoutingModule } from './confirmation-dialog-routing.module';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { ConfirmationDialogService } from '../services/confirmation-dialog.service';


@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [
    CommonModule,
    ConfirmationDialogRoutingModule
    
  ],
  providers: [ConfirmationDialogService],
  exports: [ConfirmationDialogComponent]
})
export class ConfirmationDialogModule {
  getComponent(){
    return ConfirmationDialogComponent ;
  }
 }
