import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import { Subscription } from 'rxjs';
import { LoginService } from '../login/login.service';
import { Usuario } from '../models/usuario/usuario.model';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;
  currentUser: any;
  private roles: string[] = [];


  constructor(private router: Router, 
              private loginService: LoginService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.currentUser = this.tokenStorageService.getUser();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.currentUser = this.tokenStorageService.getUser();
      this.roles =  this.currentUser.roles;
   
    //Toggle Click Function
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
   }
  }
  
  logout(): void {

    this.tokenStorageService.signOut();
    this.router.navigate(["/login"])
    this.reloadPage();
  }

  home():void{
    this.router.navigate(["/home"])
  }
  
  reloadPage(): void {
    window.location.reload();
  }

}
