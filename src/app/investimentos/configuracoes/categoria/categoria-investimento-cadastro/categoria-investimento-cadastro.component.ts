import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria_investimento } from 'src/app/models/investimento/categoria-investimento.model';
import { CategoriaInvestimentoService } from 'src/app/_services/investimento/categoria-investimento.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';

interface Risco {
  descricao: string;
}
@Component({
  selector: 'app-categoria-investimento-cadastro',
  templateUrl: './categoria-investimento-cadastro.component.html',
  styleUrls: ['./categoria-investimento-cadastro.component.css']
})
export class CategoriaInvestimentoCadastroComponent implements OnInit {

  categoria_investimento = new Categoria_investimento
  erros: boolean = false
  errosMessage: string[] = []
  step = 0
  nivel_risco: Risco[] = [
    { descricao: "Alto" },
    { descricao: "Moderado" },
    { descricao: "Baixo" }
  ]

  constructor(private categoriaInvestService: CategoriaInvestimentoService,
    private router: Router,
    private mensagemPadrao: MensagensPadraoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void { }

  cadastrarCategoriaInvestimento(): void {
    this.erros = false
    this.errosMessage = []
    
    //Remoção dos espaços
    if (this.categoria_investimento.categoria !== undefined) {
      this.categoria_investimento.categoria = this.categoria_investimento.categoria.trim()
    }
    if (this.categoria_investimento.descricao !== undefined) {
      this.categoria_investimento.descricao = this.categoria_investimento.descricao.trim()
    }
    
    
    // Validação do preenchimento dos campos obrigatórios
    if (this.categoria_investimento.categoria === undefined || this.categoria_investimento.categoria === '' || this.categoria_investimento.categoria.length === 0) {
      this.erros = true
      this.errosMessage.push('O preenchimento do campo categoria é obrigatório')
    }
    if (this.categoria_investimento.descricao === undefined || this.categoria_investimento.descricao === '' || this.categoria_investimento.descricao.length === 0) {
      this.erros = true
      this.errosMessage.push('O preenchimento do descrição é obrigatório')
    }
    if (this.categoria_investimento.risco === undefined || this.categoria_investimento.risco === '' || this.categoria_investimento.risco.length === 0) {
      this.erros = true
      this.errosMessage.push('O preenchimento do nível de risco é obrigatório')

    }
    
    if (this.erros == false) {
      this.categoriaInvestService.createCategoria_investimento(this.categoria_investimento).subscribe(
        data => {
          this.mensagemPadrao.showMessage('Categoria de Investimento cadastrado com sucesso!')
          this.router.navigate(['/categoria-investimento-consulta'])
        }, erros => {
          this.mensagemPadrao.showMessage('Ocorreu um erro ao cadastrar a Categoria de Investimento! Por favor analise o console.')
          console.log(erros)
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
