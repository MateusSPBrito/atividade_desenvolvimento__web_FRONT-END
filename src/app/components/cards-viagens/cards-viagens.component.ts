import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards-viagens',
  templateUrl: './cards-viagens.component.html',
  styleUrls: ['./cards-viagens.component.css']
})
export class CardsViagensComponent {
  @Input() voos: any[] = []
  @Output() setVoo = new EventEmitter<any>();

  send(index: number){
    this.setVoo.emit(this.voos[index])
  }
}
