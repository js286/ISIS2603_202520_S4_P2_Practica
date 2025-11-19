import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Emprendedor } from './emprendedor';

@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {
  private baseUrl = environment.baseUrl;
  private baseDetailUrl = environment.baseDetailUrl;

  constructor(private http: HttpClient ) { }

  getEmprendedores(): Observable<Emprendedor[]> {
    return this.http.get<Emprendedor[]>(this.baseUrl);
  }

  
  getEmprendedoresById(id: number): Observable<Emprendedor> {
    return this.http.get<Emprendedor>(this.baseDetailUrl + id.toString());
  }

}

