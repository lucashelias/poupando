import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Banco } from 'src/app/models/banco/banco.model';
import { ContaCorrente } from 'src/app/models/banco/conta-corrente.model';
import { BancoService } from 'src/app/_services/banco/banco.service';
import { TipoContaCorrenteService } from 'src/app/_services/conta-bancaria/tipo-conta-corrente.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';

@Component({
  selector: 'app-conta-corrente-consulta',
  templateUrl: './conta-corrente-consulta.component.html',
  styleUrls: ['./conta-corrente-consulta.component.css']
})
export class ContaCorrenteConsultaComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['Cliente', 'Banco', 'Agencia', 'Conta-Corrente'];
  dataSource = new MatTableDataSource<ContaCorrente>()
  selection = new SelectionModel<ContaCorrente>(true, []);
  step = 0;
  banco: Banco[];
  dadosBanco = Banco;
  conta_corrente: ContaCorrente;
  bancoCTRL = new FormControl();
  filteredBancos: Observable<Banco[]>;


  constructor(private bancoService: BancoService,
    private contacorrenteService: TipoContaCorrenteService,
    private mensagemPadrao: MensagensPadraoService) {

    this.filteredBancos = this.bancoCTRL.valueChanges
      .pipe(
        startWith(''),
        map(banco => banco ? this._filterEmployees(banco) : this.banco.slice())
      );
  }

  ngOnInit(): void {

    this.carregarBancos();
  }

  private _filterEmployees(value: string): Banco[] {
    const filterValue = value.toLowerCase();

    return this.banco.filter(state => state.nome.toLowerCase().indexOf(filterValue) === 0);
  }

  ngAfterViewInit(): void { }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ContaCorrente): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  carregarBancos(): void {
    this.bancoService.getAllBanco().subscribe(
      bancos => {
        this.banco = bancos
      },
      error => {
        this.mensagemPadrao.showMessage('Ocorreu um problema ao carregar os dados dos Bancos. Por favor analise o log')
        console.log(error)
      }
    )



  }

  novaContaCorrente(): void {

  }

  consultarMovimentacoes(): void {

  }

  editarContaCorrente(): void {

  }

  pesquisarContaCorrente(): void {

  }

  deletarContaCorrente(): void {

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
