import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ngOnInit() {
    const menuBtn: any = document.getElementById("menu-btn")
    const navMobile: any = document.getElementById("nav-mobile")
    menuBtn.addEventListener('click', () => { // botao menu navegação mobile
      if (navMobile.classList.contains("none")) navMobile.classList.remove('none')
      else navMobile.classList.add('none')
    })
  }
}
