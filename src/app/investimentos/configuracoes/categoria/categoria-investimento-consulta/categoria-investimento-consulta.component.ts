import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Categoria_investimento } from 'src/app/models/investimento/categoria-investimento.model';
import { CategoriaInvestimentoService } from 'src/app/_services/investimento/categoria-investimento.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';

@Component({
  selector: 'app-categoria-investimento-consulta',
  templateUrl: './categoria-investimento-consulta.component.html',
  styleUrls: ['./categoria-investimento-consulta.component.css']
})
export class CategoriaInvestimentoConsultaComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  step = 0
  displayedColumns: string[] = ['Id', 'Categoria','Descricao', 'Risco', 'Opcoes'];
  dataSource: MatTableDataSource<Categoria_investimento>;
  categoria_investimento: Categoria_investimento[]


  constructor(private categoriaInvestService: CategoriaInvestimentoService,
    private router: Router,
    private mensagemPadrao: MensagensPadraoService) { }

  ngOnInit(): void {
    this.buscaCategoriaInvestimento();
  }

  buscaCategoriaInvestimento(): void {
    this.categoriaInvestService.getAllCategoria_investimento().subscribe(
      data => {
        this.categoria_investimento = data
        this.dataSource = new MatTableDataSource(this.categoria_investimento)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort

      }, error => {
        this.mensagemPadrao.showMessage('Ocorreu um erro ao buscar as informações das Categorias de Investimentos! Por favor analise o console.')
        console.log(error)
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
    this.router.navigate(['/categoria-investimento-cadastro'])
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
