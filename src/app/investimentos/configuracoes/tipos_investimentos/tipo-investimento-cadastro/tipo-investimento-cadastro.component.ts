import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria_investimento } from 'src/app/models/investimento/categoria-investimento.model';
import { Tipo_investimento } from 'src/app/models/investimento/tipo-investimento.model';
import { CategoriaInvestimentoService } from 'src/app/_services/investimento/categoria-investimento.service';
import { TipoIinvestimentoService } from 'src/app/_services/investimento/tipo-investimento.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';

@Component({
  selector: 'app-tipo-investimento-cadastro',
  templateUrl: './tipo-investimento-cadastro.component.html',
  styleUrls: ['./tipo-investimento-cadastro.component.css']
})
export class TipoInvestimentoCadastroComponent implements OnInit {

  step = 0
  tipo_investimento = new Tipo_investimento
  categoria_investimento: Categoria_investimento[]
  erros: boolean = false;
  errosMessage: string[] = []

  constructor(private tipoInvestimentoService: TipoIinvestimentoService,
    private categoriaInvestService: CategoriaInvestimentoService,
    private router: Router,
    private mensagemPadrao: MensagensPadraoService) { }

  ngOnInit(): void {
    this.buscaCategoriaInvestimento()
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

  cadastrarTipoInvestimento(): void {

    this.erros =false
    this.errosMessage = []

    if (this.tipo_investimento.tipo_investimento != undefined) {
      this.tipo_investimento.tipo_investimento = this.tipo_investimento.tipo_investimento.trim()
    }
    if (this.tipo_investimento.descricao != undefined) {
      this.tipo_investimento.descricao = this.tipo_investimento.descricao.trim()
    }

    if (this.tipo_investimento.tipo_investimento === undefined || this.tipo_investimento.tipo_investimento === '') {
      this.erros = true
      this.errosMessage.push('O preenchimento do tipo de investimento é obrigatório')
    }

    if (this.tipo_investimento.id_categoria === undefined || this.tipo_investimento.id_categoria === '' || this.tipo_investimento.id_categoria.length === 0) {
      this.erros = true
      this.errosMessage.push('O preenchimento da categoria de investimento é obrigatória')
    }

    if (this.erros === false) {

      this.tipoInvestimentoService.createTipo_investimento(this.tipo_investimento).subscribe(
        data => {
          this.mensagemPadrao.showMessage('O Tipo de Investimento foi cadastrado com sucesso!')
          this.router.navigate(['/tipo-investimento-consulta'])
        }, error => {
          this.mensagemPadrao.showMessage('Ocorreu um erro ao cadastrar as informações do Tipo de Investimentos! Por favor analise o console.')
          console.log(error)
        })
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
