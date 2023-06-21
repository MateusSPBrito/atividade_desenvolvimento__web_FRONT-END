import { Component } from '@angular/core';
import Filter from '../../models/filter';
import Voo from 'src/app/models/voo';
import { ViagensService } from 'src/app/services/viagens.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service: ViagensService) { }
  voos: any = []
  filter = new Filter
  page = 'voos'
  seats: any = []

  showViagem = false
  voo = new Voo

  setPage(page: any) {
    this.page = page
  }

  setVoos(obj: any) {
    this.voos = obj.voos
    this.filter = obj.filter
  }

  divideVoos(go = true): any {
    const goVoos: any = []
    const backVoos: any = []
    this.voos.forEach((voo: any) => {
      if (voo.date == this.filter.goDate) goVoos.push(voo)
      else if (voo.date == this.filter?.backDate) backVoos.push(voo)
    });
    if (go) return goVoos;
    else return backVoos;
  }

  setVoo(voo: Voo) {
    this.service.getSeats(voo.id).subscribe((result) => {
      this.seats = result
      this.voo = voo
      this.showViagem = true
    })
  }

  closeModal() {
    this.showViagem = false
    this.seats = []
    this.voo = new Voo
  }
}
