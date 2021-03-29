import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs/operators';
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
  errosMessage: string[] = []
  erros: boolean = false

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
    this.erros = false;
    this.errosMessage = []
    const url_base = '/assets/img/logo/';

    // Remover os espaços em branco no final e no inicio da informação.
    if(this.dadosBanco.nome !== undefined){
      this.dadosBanco.nome = this.dadosBanco.nome.trim()
    }
    if(this.dadosBanco.nome !== undefined){
      this.dadosBanco.url_logo = this.dadosBanco.url_logo.trim();
    }
    if(this.dadosBanco.nome !== undefined){
      this.dadosBanco.site = this.dadosBanco.site.trim();
    }
      
    // Validação se o campo se encontra preenchido corretamente.
    if(this.dadosBanco.codigo === undefined || this.dadosBanco.codigo === null || this.dadosBanco.codigo === 0){
     this.erros = true;
     this.errosMessage.push('O código do banco é de preenchimento obrigatório')
   }
    if(this.dadosBanco.nome === undefined || this.dadosBanco.nome === '' || this.dadosBanco.nome.length === 0){
      this.erros = true;
      this.errosMessage.push('O nome do banco é de preenchimento obrigatório')
    }
    if(this.dadosBanco.ativo === undefined || this.dadosBanco.ativo.length === 0){
      this.erros = true;
      this.errosMessage.push('O status do banco é preenchimento obrigatório')
    }


    if (this.erros == false) {
      
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
