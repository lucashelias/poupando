import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { Subscription } from 'rxjs';
import { LoginService } from '../login/login.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioLogado: boolean = true;
  usuario: Usuario;
  validaUsuarioLogado: Subscription;
  user: Subscription;


  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {

    this.validaUsuarioLogado = this.loginService.validarUsuarioLogado()
    .subscribe(valor => {
      this.usuarioLogado = valor;
    });

    // Recebe o usuário da tela de Login
    this.user = this.loginService.recebeUsuario()
    .subscribe(objeto => {
      this.usuario = objeto.lista;

      console.log('Recebendo o usuario do login (HOME)',this.usuario)
      console.log('Objeto retornado do (LOGIN)',objeto)
    });


    //Toggle Click Function
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  logout(): void {

    this.usuarioLogado = false;
    this.router.navigate(["/login"])
  }

}
