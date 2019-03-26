import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObservedataService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/observemenu/:studentid'; //not dynamic, must get studentid from observedetail.ts to be dynamic

  observedata(observeData){
    return this.http.post<any>(this.url, observeData);
  }
}