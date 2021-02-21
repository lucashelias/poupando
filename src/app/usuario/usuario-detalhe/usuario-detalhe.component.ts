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
import { TableColumn } from 'src/app/componente_shared/tabela-component/tableColumn';



@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent implements OnInit {

  // displayedColumns: string[] = ['ID', 'Nome', 'Sobrenome', 'Email', 'Usuario'];
  displayedColumns: TableColumn[];
  dataSource = [
    {
      ID: '201',
      Nome: 'abcd',
      Sobrenome: 'hhhh',
      Email: 'mail.teste',
      Usuario: 'teswte_login'
    }
  ]

  step = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usuarioService: UsuarioService, private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.initColumns();
  }

  initColumns(): void {
    this.displayedColumns = [
      {
        name: 'customers name',
        dataKey: 'name'
      },
      {
        name: 'customers age',
        dataKey: 'age'
      }
    ];
  }







  // DADOS DA MODAL

  adicioneComponentModal(content) {
    this.modalService.open(content, { size: 'lg' });
    console.log("chamou a funcao")
  }

  openLg() {
    this.modalService.open(UsuarioCadastroComponent, { size: 'lg' });
  }

  // FIM DADOS MODAL

  //  ========== Controle do painel ========== 

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  //  ========== FIM Controle do painel ========== 


  novo(): void {
    this.router.navigate(["/usuario-cadastro"])
  }

  buscaUsuario(): void {

    this.dataSource = [
      {
        ID: '201',
        Nome: 'abcd',
        Sobrenome: 'hhhh',
        Email: 'mail.teste',
        Usuario: 'teswte_login',
      }
    ]

    // this.usuarioService.getAll()
    //   .subscribe(
    //     (data: any) => {
    //       this.dataSource = data;
    //       console.log(data);
    //       console.log(this.dataSource);
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }

  // ngAfterViewInit() {
  //   this.dataSource = new MatTableDataSource();
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

}

export class UserDataSource extends DataSource<any>{

  constructor(private usuarioService: UsuarioService) {
    super()
  }

  connect(): Observable<Usuario[]> {
    return this.usuarioService.getAll();
  }
  disconnect() { }

}
