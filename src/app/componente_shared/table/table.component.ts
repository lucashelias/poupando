import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/';
import { ModalContent } from './modal-content.model';
import { TableButtonOption } from './table-button-option.model';
import { TableCollumnsOptions } from './table-columns-options.model';


@Component({
  selector: 'app-table', 
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'] 
})

export class TableComponent implements OnInit {

  @Input() displayedColumns: TableCollumnsOptions[]
  @Input() dataSource;
  step = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() componentTela;
  @Input() buttons: TableButtonOption[];
  @Input() table_titulo: string = null;
  @Input() modal: ModalContent;

  constructor(private modalService: NgbModal) { }
 
  ngOnInit(): void {
  } 

  confirmacao() {
    this.modalService.open(this.componentTela, { size: 'lg' });
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
