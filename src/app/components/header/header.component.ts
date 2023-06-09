import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() page = 'voos'
  @Output() setPages= new EventEmitter<any>();

  ngOnInit() {
    const menuBtn: any = document.getElementById("menu-btn")
    const navMobile: any = document.getElementById("nav-mobile")
    menuBtn.addEventListener('click', () => { // botao menu navegação mobile
      if (navMobile.classList.contains("none")) navMobile.classList.remove('none')
      else navMobile.classList.add('none')
    })
  }

  changePage(page: string){
    this.setPages.emit(page)
    document.getElementById("nav-mobile")?.classList.add('none')
  }
}
