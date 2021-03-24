import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Banco } from 'src/app/models/banco/banco.model';
import { BancoService } from 'src/app/_services/banco/banco.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';

@Component({
  selector: 'app-banco-consulta',
  templateUrl: './banco-consulta.component.html',
  styleUrls: ['./banco-consulta.component.css']
})
export class BancoConsultaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Id', 'Codigo', 'Nome', 'Site', 'Opcoes'];
  dataSource: MatTableDataSource<Banco>;
  banco: Banco[] = [];
  alertaMensagem: boolean = false;
  dadosBanco = new Banco
  step = 0

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private bancosService: BancoService,
    private router: Router,
    private mensagenPadrao: MensagensPadraoService) { }

  ngOnInit(): void {
    this.consultarBancos();
  }

  cancelar(): void {
    this.router.navigate(['/home'])
  }

  consultarBancos(): void {
    this.bancosService.getAllBanco().subscribe(
      data => {
        this.banco = data
        this.dataSource = new MatTableDataSource(this.banco)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      },
      error => {
        console.log(error)
      })
  }

  novo(): void {
    this.router.navigate(['/banco-cadastro'])
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
