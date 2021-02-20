import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

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
      this.roles = this.currentUser.roles;

 
    }
  }
}