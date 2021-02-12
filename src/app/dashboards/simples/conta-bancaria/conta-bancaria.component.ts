import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-conta-bancaria',
  templateUrl: './conta-bancaria.component.html',
  styleUrls: ['./conta-bancaria.component.css']
})
export class ContaBancariaComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      data: [45, 37, 60, 70, 46, 33],
      backgroundColor: '#3a67e2',
      label: 'Cartão Crédito'
    },
      {
      data: [20, 15, 0, 10, 12, 23],
      backgroundColor: '#18d321',
      label: 'Cartão Crédito'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
