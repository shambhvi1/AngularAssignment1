import { Injectable, ViewContainerRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { LazyLoadingService } from '../../LazyLoading/lazy-loading.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  btnOkText='ok';
  btnCancelText='cancel';
  dialogSize: 'sm'|'lg' = 'sm';
  modulePath='../modals/confirmation-dialog/confirmation-dialog.module';
  moduleName='ConfirmationDialogModule'

  constructor(private modalService: NgbModal,
    private lazyLoadService : LazyLoadingService) { }


   confirm(title: string, message: string, confirmationDialogContainerRef: ViewContainerRef): Promise<boolean>{
    
    this.lazyLoadService.lazyload(confirmationDialogContainerRef,this.modulePath,this.moduleName)
    const compRef = confirmationDialogContainerRef.createComponent(ConfirmationDialogComponent);
   
    compRef.instance.title = title;
    compRef.instance.message = message;
    compRef.instance.btnOkText = this.btnOkText;
    compRef.instance.btnCancelText = this.btnCancelText;
    const compInstance=compRef.instance;
    
    const modalRef = this.modalService.open(compInstance.addview, 
      { size: this.dialogSize });
    return modalRef.result;
    

   }
  
}
