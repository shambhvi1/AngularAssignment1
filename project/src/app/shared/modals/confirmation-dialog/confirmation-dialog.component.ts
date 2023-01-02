import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})




export class ConfirmationDialogComponent implements AfterViewInit{
  @ViewChild('confirmationDialog') addview !: ElementRef
@Input() title='';

@Input() message='';

@Input() btnOkText='';

@Input() btnCancelText='';

constructor(private activeModal: NgbActiveModal,
  private modalService: NgbModal) { }
ngAfterViewInit(){
this.modalService
  .open(this.addview, { ariaLabelledBy: 'modal-basic-title' })
  .result.then((result) => {
  }, (reason) => {
  });

}


public decline() {

  this.activeModal.close(false);
  
  }
  
  public accept() {
  
  this.activeModal.close(true);
  
  }
  
  public dismiss() {
  
  this.activeModal.dismiss();
  
  }
}
