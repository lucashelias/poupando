import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario/usuario.model';

const baseUrl = 'http://localhost:8080/api/usuario';

@Injectable({
  providedIn: 'root' 
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(baseUrl);
  }

  validaUsuarioSenha(usuario: string, senha: string): Observable<Usuario[]> {
    return this.http.put<Usuario[]>(`${baseUrl}/login`,{usuario, senha});
  }
  
  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  
  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  // findByTitle(title): Observable<any> {
  //   return this.http.get(`${baseUrl}?title=${title}`);
  // }
}