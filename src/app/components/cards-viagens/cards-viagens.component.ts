import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-viagens',
  templateUrl: './cards-viagens.component.html',
  styleUrls: ['./cards-viagens.component.css']
})
export class CardsViagensComponent {
  @Input() voos: any[] = []
}
