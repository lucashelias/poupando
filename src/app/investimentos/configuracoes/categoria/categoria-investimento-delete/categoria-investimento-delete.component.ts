import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria_investimento } from 'src/app/models/investimento/categoria-investimento.model';
import { CategoriaInvestimentoService } from 'src/app/_services/investimento/categoria-investimento.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';

interface Risco {
  descricao: string;
}

@Component({
  selector: 'app-categoria-investimento-delete',
  templateUrl: './categoria-investimento-delete.component.html',
  styleUrls: ['./categoria-investimento-delete.component.css']
})
export class CategoriaInvestimentoDeleteComponent implements OnInit {

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

  ngOnInit(): void {
    this.buscaCategoriaInvestimento()
  }

  buscaCategoriaInvestimento(): void {

    const id = this.route.snapshot.paramMap.get('id')

    this.categoriaInvestService.getCategoria_investimentoByID(id).subscribe(
      data => {
        this.categoria_investimento = data
      }, error => {
        this.mensagemPadrao.showMessage('Ocorreu um erro ao buscar as informações das Categorias de Investimentos! Por favor analise o console.')
        console.log(error)
      })
  }

  excluirCategoriaInvestimento(): void{

    this.categoriaInvestService.deleteCategoria_investimento(this.categoria_investimento.id).subscribe(
      data =>{
          this.mensagemPadrao.showMessage('A Categoria de Investimento excluída com sucesso.')
          this.router.navigate(['/categoria-investimento-consulta'])
        }, 
        erros =>{
        this.mensagemPadrao.showMessage('Ocorreu um erro ao excluir a Categoria de Investimento! Por favor analisar o console')
        console.log(erros)
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
