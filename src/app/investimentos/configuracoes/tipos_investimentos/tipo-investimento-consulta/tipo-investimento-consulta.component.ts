import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tipo_investimento } from 'src/app/models/investimento/tipo-investimento.model';
import { TipoIinvestimentoService } from 'src/app/_services/investimento/tipo-investimento.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';

@Component({
  selector: 'app-tipo-investimento-consulta',
  templateUrl: './tipo-investimento-consulta.component.html',
  styleUrls: ['./tipo-investimento-consulta.component.css']
})
export class TipoInvestimentoConsultaComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  step = 0
  displayedColumns: string[] = ['Id', 'Tipo_Investimento','Categoria_Investimento','descricao', 'Opcoes'];
  dataSource: MatTableDataSource<Tipo_investimento>;
  tipo_investimento : Tipo_investimento[]

  constructor(private tipoInvestimentoService: TipoIinvestimentoService,
    private router: Router,
    private mensagemPadrao: MensagensPadraoService) { }

  ngOnInit(): void {
    this.consultaTipoInvestimento();
  }

  consultaTipoInvestimento(): void{

    this.tipoInvestimentoService.getAllTipo_investimento().subscribe(
      data =>{
        this.tipo_investimento = data
        this.dataSource = new MatTableDataSource(data)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      }, erros =>{
        this.mensagemPadrao.showMessage('Ocorreu um erro ao carregar as informações do Tipo de Investimentos! Por favor analise o console')
        console.log(erros)
      })
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

  novo(): void{
    this.router.navigate(['/tipo-investimento-cadastro'])
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
