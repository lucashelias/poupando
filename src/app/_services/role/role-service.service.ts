import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../../models/role/role.model';
import { UserRole } from '../../models/role/user_role.model';

const baseUrl = 'http://localhost:8080/api/role_user';

@Injectable({
  providedIn: 'root' 
})
export class RoleUserService {

  constructor(private http: HttpClient) { }

  getAllRole(): Observable<Role[]> {
    return this.http.get<Role[]>(baseUrl);
  }

  getUserRoleByID(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
    console.log(`${baseUrl}/${id}`)
  }

  getAllUsuarioRole(): Observable<UserRole[]> {
    return this.http.get<UserRole[]>(baseUrl);
  }

  createUserRole(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  
  getUserRole(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  updateUserRole(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteUserRole(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}