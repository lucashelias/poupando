import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioLogado: boolean = false;
  usuario: Usuario;

  constructor(private router: Router) { }

  ngOnInit() {

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
