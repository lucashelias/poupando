import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tipo_conta_corrente } from 'src/app/models/banco/tipo-conta_corrente.model';
import { TipoContaCorrenteService } from 'src/app/_services/conta-bancaria/tipo-conta-corrente.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';

@Component({
  selector: 'app-tipo-conta-corrente-consulta',
  templateUrl: './tipo-conta-corrente-consulta.component.html',
  styleUrls: ['./tipo-conta-corrente-consulta.component.css']
})
export class TipoContaCorrenteConsultaComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Tipo_Conta', 'Descricao', 'Opcoes'];
  dataSource: MatTableDataSource<Tipo_conta_corrente>;
  tipo_conta_corrente: Tipo_conta_corrente[];
  step = 0

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private tipoContaCorrenteService: TipoContaCorrenteService,
              private router: Router,
              private mensagenPadrao: MensagensPadraoService) { }

  ngOnInit(): void {
    this.consultarBancos();
  }

  cancelar(): void {
    this.router.navigate(['/home'])
  }

  consultarBancos(): void {
    this.tipoContaCorrenteService.getAll_tipo_conta_corrente().subscribe(
      data => {
        this.tipo_conta_corrente = data
        this.dataSource = new MatTableDataSource(this.tipo_conta_corrente)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      },
      error => {
        console.log(error)
      })
  }

  novo(): void {
    this.router.navigate(['/tipo-conta-corrente-cadastro'])
  }

  
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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

}
