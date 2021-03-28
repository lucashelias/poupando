import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tipo_conta_corrente } from 'src/app/models/banco/tipo-conta_corrente.model';
import { TipoContaCorrenteService } from 'src/app/_services/conta-bancaria/tipo-conta-corrente.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';

@Component({
  selector: 'app-tipo-conta-corrente-cadastro',
  templateUrl: './tipo-conta-corrente-cadastro.component.html',
  styleUrls: ['./tipo-conta-corrente-cadastro.component.css']
})
export class TipoContaCorrenteCadastroComponent implements OnInit {

  tipo_conta = new Tipo_conta_corrente
  step = 0
  erro : boolean = false
  mensagemErros: string[] = []


  constructor(private tipoContaCorrenteService: TipoContaCorrenteService,
              private router: Router,
              private mensagenPadrao: MensagensPadraoService) { }

  ngOnInit(): void {
  }

  salvarTipoConta(): void{
    this.erro = false
    this.mensagemErros = []
    this.tipo_conta.tipo_conta = this.tipo_conta.tipo_conta.trim()
    this.tipo_conta.descricao = this.tipo_conta.descricao.trim()

    if(this.tipo_conta.tipo_conta === undefined || this.tipo_conta.tipo_conta === '' || this.tipo_conta.tipo_conta.length === 0){

      this.erro = true
      this.mensagemErros.push('O preenchimento do tipo conta é obrigatório.')

    }else{

      this.tipoContaCorrenteService.create_tipo_conta_corrente(this.tipo_conta).subscribe(
        data =>{
          this.mensagenPadrao.showMessage('Cadastro realizado com sucesso!')
          this.router.navigate(['/tipo-conta-corrente-consulta'])
        },
        error =>{
          this.mensagenPadrao.showMessage('Ocorreu um erro ao realizar o cadastro. Por favor analisar o console!')
          console.log(error)
        }
        )
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
