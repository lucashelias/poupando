import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']  
})
export class MenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isLoggedIn = false;
  currentUser: any;
  panelOpenState = false;

  constructor(private breakpointObserver: BreakpointObserver,
    private tokenStorageService: TokenStorageService,
    private router: Router) {  }


  ngOnInit() {
    this.currentUser = this.tokenStorageService.getUser();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.currentUser = this.tokenStorageService.getUser();
      // this.roles = this.currentUser.roles;
    }

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  dashboards(): void {
    this.router.navigate(["/home-detalhe"])
  }

  logout(): void {

    this.tokenStorageService.signOut();
    this.router.navigate(["/login"])
    setTimeout(() => { this.reloadPage()}, 1);
  }

  reloadPage(): void {
    window.location.reload();
  }


}
