import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tipo_investimento } from '../../models/investimento/tipo-investimento.model';

const baseUrl = 'http://localhost:8080/api/tipo_investimento';

@Injectable({
  providedIn: 'root' 
})

export class TipoIinvestimentoService {

  constructor(private http: HttpClient) { }

  getAllTipo_investimento(): Observable<Tipo_investimento[]> {
    return this.http.get<Tipo_investimento[]>(baseUrl);
  }

  getTipo_investimentoByID(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createTipo_investimento(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  
  updateTipo_investimento(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteTipo_investimento(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}