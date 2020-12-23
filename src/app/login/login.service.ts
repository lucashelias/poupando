import { BehaviorSubject } from "rxjs";

export class LoginService {
    private loginServiceBehaviorSubject = new BehaviorSubject<boolean>(false);
  
    constructor() { }
  
    usuarioLogado(valor: boolean) {
      this.loginServiceBehaviorSubject.next(valor);
    }
  
    validarUsuarioLogado() {
      return this.loginServiceBehaviorSubject;
    }
  }