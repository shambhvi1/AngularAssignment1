import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  btnOkText='ok';
  btnCancelText='cancel';
  dialogSize: 'sm'|'lg' = 'sm';

  constructor(private modalService: NgbModal) { }
   confirm(title: string, message: string): Promise<boolean>{
    const modalRef = this.modalService.open(ConfirmationDialogComponent, 
      { size: this.dialogSize });

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = this.btnOkText;
    modalRef.componentInstance.btnCancelText = this.btnCancelText;
    return modalRef.result;
    

   }
  
}
