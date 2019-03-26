import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from './numberfitres';

@Injectable({
  providedIn: 'root'
})

export class LocalservicesService {

  constructor(private http: HttpClient) { }

  getnumberfit():Observable <RootObject[]>{
    return this.http.get<RootObject[]>('http://ec2-3-8-210-51.eu-west-2.compute.amazonaws.com:8080/NFsession/PP5YHQ7.json'); 
  }
}