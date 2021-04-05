import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CotacaoMoedaTaxa } from 'src/app/models/moedas/cotacao-moeda-taxa.model';

// const baseUrl = 'https://economia.awesomeapi.com.br';
// const baseUrl = 'https://economia.awesomeapi.com.br/json/all';
const baseUrl = '/json/all';

@Injectable({
  providedIn: 'root' 
})

export class CotacaoCambioService  {

  constructor(private http: HttpClient) { }

  getAllTaxaMoedas(): Observable<CotacaoMoedaTaxa[]> {
    return this.http.get<CotacaoMoedaTaxa[]>(baseUrl);
  }

  getTaxaMoeda(moeda): Observable<CotacaoMoedaTaxa> {
    return this.http.get<CotacaoMoedaTaxa>(`${baseUrl}/${moeda}`);
  }
  
}