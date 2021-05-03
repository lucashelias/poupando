import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CotacaoMoedaTaxa } from 'src/app/models/moedas/cotacao-moeda-taxa.model';
import { CotacaoCambioService } from 'src/app/_services/cotacao-cambio/cotacao-cambio.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';

@Component({
  selector: 'app-bolsa-de-valores',
  templateUrl: './bolsa-de-valores.component.html',
  styleUrls: ['./bolsa-de-valores.component.css']
})
export class BolsaDeValoresComponent implements OnInit {

  cotacaoMoedaTaxa: CotacaoMoedaTaxa
  url: string = 'json/all/USD-BRL';

  constructor(private cotacaoCambioService: CotacaoCambioService,
    private mensagemPadrao: MensagensPadraoService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.buscarCotacaoMoeda()
  }

  buscarCotacaoMoeda():void{
    let moeda1: string = 'USD-BRL'
    // let moeda2: string = 'EUR-BRL'
    
  this.cotacaoCambioService.getTaxaMoeda(moeda1).subscribe(
    data =>{
      this.cotacaoMoedaTaxa = data      
    }, error =>{
      console.log(error)
      this.mensagemPadrao.showMessage('Ocorreu um problema ao consultar a taxa entre as moedas: '+ moeda1)
    })
  }
}
