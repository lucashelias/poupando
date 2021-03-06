import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from 'src/app/models/role/role.model';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from './usuario.service';

@Component({ 
  selector: 'app-usuario-detalhe', 
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit { 

  displayedColumns: string[] = ['ID', 'Nome', 'Sobrenome', 'Email','Usuario','Status','Acao']; 
  // dataSource: MatTableDataSource<Usuario>;
  dataSource = new UserDataSource(this.usuarioService);
  step = 0;
  usuario: Usuario[];
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usuarioService: UsuarioService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  novo(): void {
    this.router.navigate(["/usuario-cadastro"])

  }

  buscaUsuario(): void {
    this.usuarioService.getAll()
      .subscribe(
        (data :any) => {
          this.usuario = data.lista;
          // this.dataSource = new MatTableDataSource(this.usuario)
          this.usuario
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

export class UserDataSource extends DataSource<any>{
  
  constructor(private usuarioService: UsuarioService){
    super()
  }

  connect(): Observable<Usuario[]> {
    return this.usuarioService.getAll();
  }
  disconnect(){}
  
}
