import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria_investimento } from '../../models/investimento/categoria-investimento.model';

const baseUrl = 'http://localhost:8080/api/categoria_investimento';

@Injectable({
  providedIn: 'root' 
})
export class Categoria_investimentoUserService {

  constructor(private http: HttpClient) { }

  getAllCategoria_investimento(): Observable<Categoria_investimento[]> {
    return this.http.get<Categoria_investimento[]>(baseUrl);
  }

  getCategoria_investimentoByID(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
    console.log(`${baseUrl}/${id}`)
  }

  createCategoria_investimento(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  
  updateCategoria_investimento(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteCategoria_investimento(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}