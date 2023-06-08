import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import Filter from '../components/filter/model';

@Injectable({
  providedIn: 'root'
})
export class ViagensService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/voo'

  getViagens(filter: Filter, goAndBack: boolean): Observable<any[]> {
    let url = `${this.apiUrl}?destiny=${filter.destiny}&start=${filter.start}&date=${filter.goDate}`
    if (goAndBack)
      url = `${this.apiUrl}?destiny=${filter.destiny}&start=${filter.start}&date=${filter.goDate}&datereturn=${filter.backDate}`
    return this.http.get<any[]>(url);
  }
}
