import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-user-viagens',
  templateUrl: './card-user-viagens.component.html',
  styleUrls: ['./card-user-viagens.component.css']
})
export class CardUserViagensComponent {
  @Input() voos: any = []

  selectVoo: any = undefined

  open(i: number) {
    this.selectVoo = this.voos[i]
  }

  close(){
    this.selectVoo = undefined
  }
}
