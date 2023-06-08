import { Component, EventEmitter, Output,  } from '@angular/core';
import { ViagensService } from 'src/app/services/viagens.service';
import Filter from './model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  constructor(private service: ViagensService) { }

  @Output() setVoos = new EventEmitter<any>();
  goAndBack = false
  filter = new Filter

  setGoAndBack() {
    this.goAndBack = !this.goAndBack
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
