import { Component, OnInit } from '@angular/core';
import { UsuarioCadastroComponent } from 'src/app/cadastros/usuario-cadastro/usuario-cadastro.component';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
 
@Component({
  selector: 'app-home-detalhe',
  templateUrl: './home-detalhe.component.html',
  styleUrls: ['./home-detalhe.component.css']
})
export class HomeDetalheComponent implements OnInit { 
   
  content?: string; 
  currentUser?: any;
  

  constructor(private userService: UserService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();

    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

 

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

 }



