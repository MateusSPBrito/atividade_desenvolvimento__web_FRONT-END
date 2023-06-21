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
    let go = filter.goDate.split('-').reverse().join('/')
    let back
    if(filter.backDate) back = filter.backDate.split('-').reverse().join('/')
    // console.log(go, back)
    let url = `${this.apiUrl}voo?destiny=${filter.destiny}&start=${filter.start}&date=${go}`
    if (goAndBack)
      url = `${this.apiUrl}voo?destiny=${filter.destiny}&start=${filter.start}&date=${go}&datereturn=${back}`
    return this.http.get<any[]>(url);
  }

  getUserViagens() {
    const userJson: any = window.localStorage.getItem('user')
    const user = JSON.parse(userJson)
    let url = `${this.apiUrl}reservation/my-reservations/${user.id}`
    return this.http.get<any[]>(url);
  }

  getSeats(vooId: any) {
    let url = `${this.apiUrl}reservation/${vooId}`
    return this.http.get<any[]>(url);
  }

  newReserve(data: any) {
    let url = `${this.apiUrl}reservation/new`
    return this.http.post(url, data);
  }
}
