import { BehaviorSubject } from "rxjs";
import { Injectable } from '@angular/core';
import { Usuario } from "../models/usuario.model";


@Injectable({
  providedIn: 'root' 
})
export class LoginService {
    usuario: Usuario

    private loginServiceBehaviorSubject = new BehaviorSubject<boolean>(false);
    private userObject = new BehaviorSubject<any>('')
  
    constructor() { }
  
    usuarioLogado(valor: boolean) {
      this.loginServiceBehaviorSubject.next(valor);
    }
  
    validarUsuarioLogado() {
      return this.loginServiceBehaviorSubject;
    }

    enviaUsuario(valor: object){
      this.userObject.next(valor);
    }

    recebeUsuario(){
      return this.userObject;
    }
}