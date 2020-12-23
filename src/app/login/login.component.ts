import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../cadastros/usuario-detalhe/usuario.service';
import { Usuario } from '../models/usuario.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private loginService: LoginService,
    private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit() { }

  // Precisa ainda fazer a validação do usuário
  login(username: string, password: string) {

    this.usuarioService.validaUsuarioSenha(username, password)
      .subscribe(
        (data: any) => {
          this.usuario = data;

          if (data.length) {
            this.loginService.enviaUsuario(this.usuario)
            console.log('Envio do usuário',this.usuario)
            this.loginService.usuarioLogado(true);
            this.router.navigate(["/home-detalhe"])
          } else {
            console.log("Ocorreu um erro na verificação do usuário e senha");
          }
        },
        error => {
          console.log(error);
        });

  }
}