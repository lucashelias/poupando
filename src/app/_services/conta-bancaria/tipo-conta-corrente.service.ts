import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tipo_conta_corrente } from '../../models/banco/tipo-conta_corrente.model';

const baseUrl = 'http://localhost:8080/api/tipo_conta_corrente';

@Injectable({
  providedIn: 'root' 
})
export class TipoContaCorrenteService {

  constructor(private http: HttpClient) { }

  getAll_tipo_conta_corrente(): Observable<Tipo_conta_corrente[]> {
    return this.http.get<Tipo_conta_corrente[]>(baseUrl);
  }

  get_tipo_conta_correnteByID(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
    console.log(`${baseUrl}/${id}`)
  }

  create_tipo_conta_corrente(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  
  update_tipo_conta_corrente(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete_tipo_conta_corrente(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}