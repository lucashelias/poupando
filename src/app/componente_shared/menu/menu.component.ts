import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Router } from '@angular/router';

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

  constructor(private breakpointObserver: BreakpointObserver,
    private tokenStorageService: TokenStorageService,
    private router: Router) { }

  ngOnInit() {
    this.currentUser = this.tokenStorageService.getUser();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.currentUser = this.tokenStorageService.getUser();
      // this.roles = this.currentUser.roles;
    }
  }

  dashboards():void{
    this.router.navigate(["/home-detalhe"])
  }

  logout(): void {

    this.tokenStorageService.signOut();
    this.reloadPage();
    this.router.navigate(["/login"])
    this.router.navigate(["/login"])
    this.router.navigate(["/login"])
  }

  reloadPage(): void {
    window.location.reload();
  }


}
