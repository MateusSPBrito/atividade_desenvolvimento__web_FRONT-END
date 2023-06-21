import { Component, EventEmitter, Output,  } from '@angular/core';
import { ViagensService } from 'src/app/services/viagens.service';
import Filter from '../../models/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  constructor(private service: ViagensService) { }

  @Output() setVoos = new EventEmitter<any>();
  goAndBack = true
  filter = new Filter

  ngOnInit(){
    // this.filter.backDate = '2023-06-19'
    // this.filter.goDate = '2023-06-12'
    // this.filter.destiny = 'Salvador'
    // this.filter.start = 'Feira de Santana'

    // this.getViagens()
  }

  setGoAndBack(goAndBack = false) {
    this.goAndBack = goAndBack
  }

  async getViagens() {
    const validate = this.validateForms()
    if(!validate) return
    this.service.getViagens(this.filter, this.goAndBack).subscribe((result)=>(this.setVoos.emit({voos: result, filter: this.filter})))
  }

  validateForms(){
    if (!this.filter.destiny || !this.filter.start || !this.filter.goDate) return false
    return true
  }

}
