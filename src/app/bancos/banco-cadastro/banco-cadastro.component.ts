import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banco } from 'src/app/models/banco/banco.model';
import { BancoService } from 'src/app/_services/banco/banco.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';

interface Status {
  tipo: string;
  descricao: string;
}

@Component({
  selector: 'app-banco-cadastro',
  templateUrl: './banco-cadastro.component.html',
  styleUrls: ['./banco-cadastro.component.css']
})
export class BancoCadastroComponent implements OnInit {
  
  dadosBanco = new Banco
  step = 0;
  logo: string;

  banco_status: Status[] = [
    { tipo: "A", descricao: "Ativo" },
    { tipo: "I", descricao: "Inativo" }
  ]
  

  constructor(private router: Router,
              private mensagemPadrao: MensagensPadraoService,
              private bancoService: BancoService) { }

  ngOnInit(): void {

  }

  salvarBanco(): void {
    let errosSalvar: string[] = []
    const url_base = '/assets/img/logo/';
  

    if (this.dadosBanco.codigo == undefined || this.dadosBanco.codigo == null ) {
      console.log(this.dadosBanco.codigo)
      errosSalvar.push('O preenchimento do código é obrigatório')
    }
    else if (this.dadosBanco.nome == undefined || this.dadosBanco.nome == null) {
      errosSalvar.push('O preenchimento do nome do banco é obrigatório')
    }
    
    if (errosSalvar.length == 0) {
      
      this.dadosBanco.url_logo = url_base + this.logo;
      console.log(this.dadosBanco.url_logo)

      this.bancoService.createBanco(this.dadosBanco).subscribe(
        data => {
          this.mensagemPadrao.showMessage('Banco cadastrado com sucesso')
          this.router.navigate(['/banco-consulta'])
        }, error => {
          this.mensagemPadrao.showMessage('Ocorreu um erro ao cadastrar o banco, por favor olhar o console')
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
