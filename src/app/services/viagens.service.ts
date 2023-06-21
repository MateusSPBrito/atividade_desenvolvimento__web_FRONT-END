import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Filter from '../models/filter';

@Injectable({
  providedIn: 'root'
})
export class ViagensService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://192.168.1.9:3000/'

  getViagens(filter: Filter, goAndBack: boolean): Observable<any[]> {
    let url = `${this.apiUrl}voo?destiny=${filter.destiny}&start=${filter.start}&date=${filter.goDate}`
    if (goAndBack)
      url = `${this.apiUrl}voo?destiny=${filter.destiny}&start=${filter.start}&date=${filter.goDate}&datereturn=${filter.backDate}`
    return this.http.get<any[]>(url);
  }

  getSeats(vooId: any) {
    let url = `${this.apiUrl}reservation/${vooId}`
    return this.http.get<any[]>(url);
  }

  newReserve(data: any){
    let url = `${this.apiUrl}reservation/new`
    return this.http.post(url, data);
  }
}
