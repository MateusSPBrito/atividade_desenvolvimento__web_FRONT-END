import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public success(message: string, title?: string){
    this.showAlert(title, message, 'success')
  }

  public error(message: string, title?: string){
    this.showAlert(title, message, 'error')
  }

  public info(message: string, title?: string){
    this.showAlert(title, message, 'info')
  }

  private showAlert(title: string | undefined, message: string, icon: SweetAlertIcon) {
    Swal.fire(title, message, icon)
  }
}
