import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  _url: string = 'http://localhost:3000/budget';
  constructor(private http: HttpClient) { }

  getDataChart(): Observable<any> {
    return this.http.get(this._url);
  }

}
