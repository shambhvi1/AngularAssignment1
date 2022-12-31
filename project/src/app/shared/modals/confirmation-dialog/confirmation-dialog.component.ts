import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})




export class ConfirmationDialogComponent {
  @Input() title='';

@Input() message='';

@Input() btnOkText='';

@Input() btnCancelText='';

constructor(private activeModal: NgbActiveModal) { }


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
