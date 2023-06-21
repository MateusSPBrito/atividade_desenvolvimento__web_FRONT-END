import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-user-voos',
  templateUrl: './modal-user-voos.component.html',
  styleUrls: ['./modal-user-voos.component.css']
})
export class ModalUserVoosComponent {
  @Input() voo: any = undefined
  @Output() closeModal = new EventEmitter<any>

  close(){
    console.log(this.voo)
    this.closeModal.emit()
  }
}
