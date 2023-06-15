import { Component } from '@angular/core';
import Login from 'src/app/models/login';
import NewUser from 'src/app/models/newUser';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: AuthService, private alert: AlertService) { }

  op = 'login'
  newUser = new NewUser
  userLogin = new Login

  setOp() {
    this.op = this.op == 'login' ? 'creat' : 'login'
  }

  showPassword(id: string) {
    const input: any = document.getElementById(id)
    const icon: any = document.querySelector(`.i-${id}`)
    if (input.type == 'password') {
      input.type = 'text'
      icon.setAttribute('class', `bi bi-eye-slash-fill icon-password i-${id}`)
    }
    else {
      input.type = 'password'
      icon.setAttribute('class', `bi bi-eye-fill icon-password i-${id}`)
    }
  }

  login() {
    if (!this.userLogin.password || !this.userLogin.username) {
      this.alert.info('Informe email e senha')
      return
    }

    this.service.login(this.userLogin).subscribe(login => {
      localStorage.setItem('token', login.token.access_token)
      localStorage.setItem('user', JSON.stringify(login.user))
      window.location.href = `/home`
    }, err => {
      this.alert.error('Usuario ou senha incorretos')
    })
  }

  creat() {
    if (!this.newUser.name || !this.newUser.username || !this.newUser.password || !this.newUser.confirmPassword) {
      this.alert.info('Informe todos os campos')
      return
    }
    if (this.newUser.password != this.newUser.confirmPassword) {
      this.alert.info('As senhas estão diferentes')
      return
    }

    this.service.newUser(this.newUser).subscribe(user => {
      this.userLogin.username = user.username
      this.userLogin.password = this.newUser.password
      this.login()
    }, err => {
      console.log('erro ao criar', err)
      this.alert.error('Erro ao criar')
    }
    )
  }
}
