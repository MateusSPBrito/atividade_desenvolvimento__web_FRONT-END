import { Component } from '@angular/core';
import Filter from 'src/app/components/filter/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  voos: any = []
  filter = new Filter

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
}
