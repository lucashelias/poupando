import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  // Precisa ainda fazer a validação do usuário
  login(): void {


    this.loginService.usuarioLogado(true)
    this.router.navigate(["/home"])
  }
}