import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria_investimento } from 'src/app/models/investimento/categoria-investimento.model';
import { Tipo_investimento } from 'src/app/models/investimento/tipo-investimento.model';
import { CategoriaInvestimentoService } from 'src/app/_services/investimento/categoria-investimento.service';
import { TipoIinvestimentoService } from 'src/app/_services/investimento/tipo-investimento.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';

@Component({
  selector: 'app-tipo-investimento-delete',
  templateUrl: './tipo-investimento-delete.component.html',
  styleUrls: ['./tipo-investimento-delete.component.css']
})
export class TipoInvestimentoDeleteComponent implements OnInit {

  step = 0
  tipo_investimento = new Tipo_investimento
  categoria_investimento: Categoria_investimento[]

  constructor(private tipoInvestimentoService: TipoIinvestimentoService,
    private categoriaInvestService: CategoriaInvestimentoService,
    private route: ActivatedRoute,
    private router: Router,
    private mensagemPadrao: MensagensPadraoService) { }

  ngOnInit(): void {
    this.buscaCategoriaInvestimento()
    this.consultaTipoInvestimento()
  }


  buscaCategoriaInvestimento(): void {
    this.categoriaInvestService.getAllCategoria_investimento().subscribe(
      data => {
        this.categoria_investimento = data
      }, error => {
        this.mensagemPadrao.showMessage('Ocorreu um erro ao buscar as informações das Categorias de Investimentos! Por favor analise o console.')
        console.log(error)
      })
  }

  consultaTipoInvestimento(): void {

    const id = this.route.snapshot.paramMap.get('id')

    this.tipoInvestimentoService.getTipo_investimentoByID(id).subscribe(
      data => {
        this.tipo_investimento = data
      }, erros => {
        this.mensagemPadrao.showMessage('Ocorreu um erro ao carregar as informações do Tipo de Investimentos! Por favor analise o console')
        console.log(erros)
      })
  }

  deletarTipoInvestimento(): void {

    this.tipoInvestimentoService.deleteTipo_investimento(this.tipo_investimento.id).subscribe(
      data => {
        this.mensagemPadrao.showMessage('O Tipo de Investimento foi removido com sucesso!')
        this.router.navigate(['/tipo-investimento-consulta'])
      }, error => {
        this.mensagemPadrao.showMessage('Ocorreu um erro ao remover as informações do Tipo de Investimentos! Por favor analise o console.')
        console.log(error)
      })
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
