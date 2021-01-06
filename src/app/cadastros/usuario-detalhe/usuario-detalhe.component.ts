import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioCadastroComponent } from '../usuario-cadastro/usuario-cadastro.component';
import { UsuarioService } from './usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario-detalhe', 
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'Nome', 'Sobrenome', 'Email','Usuario'];
  dataSource = new UserDataSource(this.usuarioService);
  step = 0; 
  usuario: Usuario[]; 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usuarioService: UsuarioService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
  }

  adicioneComponentModal(content) {
    this.modalService.open(content, { size: 'lg' });
    console.log("chamou a funcao")
}

openLg() {
  this.modalService.open(UsuarioCadastroComponent, { size: 'lg' });
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

  novo(): void{
    this.router.navigate(["/usuario-cadastro"])

  }

  buscaUsuario(): void {

    this.usuarioService.getAll()
      .subscribe(
        (data :any) => {
          this.usuario = data.lista;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  // ngAfterViewInit() {
  //   this.dataSource = new MatTableDataSource();
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

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
