import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banco } from '../../models/banco/banco.model';

const baseUrl = 'http://localhost:8080/api/banco';

@Injectable({
  providedIn: 'root' 
})
export class BancoService  {

  constructor(private http: HttpClient) { }

  getAllBanco(): Observable<Banco[]> {
    return this.http.get<Banco[]>(baseUrl);
  }

  getAllBancoAtivos(): Observable<Banco[]> {
    return this.http.get<Banco[]>(baseUrl);
  }

  getBancoByID(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createBanco(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  
  updateBanco(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteBanco(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}