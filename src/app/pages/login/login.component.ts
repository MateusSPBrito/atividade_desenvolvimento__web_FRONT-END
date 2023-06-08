import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword() {
    const input: any = document.getElementById('password')
    const icon: any = document.querySelector('.icon-password')
    if (input.type == 'password') {
      input.type = 'text'
      icon.setAttribute('class', 'bi bi-eye-slash-fill icon-password')
    }
    else {
      input.type = 'password'
      icon.setAttribute('class', 'bi bi-eye-fill icon-password')
    }
  }

  login(){
    window.location.href = `/home`
  }

}
