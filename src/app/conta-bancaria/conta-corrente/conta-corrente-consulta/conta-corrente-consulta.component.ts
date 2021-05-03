import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ContaCorrente } from 'src/app/models/banco/conta-corrente.model';

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

  conta_corrente: ContaCorrente

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{

  }

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

  novaContaCorrente(): void{

  }

  consultarMovimentacoes(): void{

  }

  editarContaCorrente():void {

  }

  pesquisarContaCorrente(): void{

  }

  deletarContaCorrente():void{
    
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
