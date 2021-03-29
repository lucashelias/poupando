import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banco } from 'src/app/models/banco/banco.model';
import { BancoService } from 'src/app/_services/banco/banco.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';


interface Status {
  tipo: string;
  descricao: string;
}

@Component({
  selector: 'app-banco-update',
  templateUrl: './banco-update.component.html',
  styleUrls: ['./banco-update.component.css']
})
export class BancoUpdateComponent implements OnInit {

  banco = new Banco;
  step = 0;
  banco_status: Status[] = [
    { tipo: "A", descricao: "Ativo" },
    { tipo: "I", descricao: "Inativo" }
  ]
  errosMessage: string[] = []
  erros: boolean = false

  constructor(private router: Router,
    private bancoService: BancoService,
    private route: ActivatedRoute,
    private mensagemPadrao: MensagensPadraoService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.bancoService.getBancoByID(id).subscribe(
      data => {
        this.banco = data;
      }, error => {
        console.log(error)
        this.mensagemPadrao.showMessage('Ocorreu um erro ao recuperar as informações da instituição bancária. ID: ' + id)
      })
  }

  atualizarBanco(): void {

    this.erros = false;
    this.errosMessage = []
    const url_base = '/assets/img/logo/';

    // Remover os espaços em branco no final e no inicio da informação.
    if (this.banco.nome !== undefined) {
      this.banco.nome = this.banco.nome.trim()
    }
    if (this.banco.nome !== undefined) {
      this.banco.url_logo = this.banco.url_logo.trim();
    }
    if (this.banco.nome !== undefined) {
      this.banco.site = this.banco.site.trim();
    }

    // Validação se o campo se encontra preenchido corretamente.
    if (this.banco.codigo === undefined || this.banco.codigo === null || this.banco.codigo === 0) {
      this.erros = true;
      this.errosMessage.push('O código do banco é de preenchimento obrigatório')
    }
    if (this.banco.nome === undefined || this.banco.nome === '' || this.banco.nome.length === 0) {
      this.erros = true;
      this.errosMessage.push('O nome do banco é de preenchimento obrigatório')
    }

    if (this.erros == false) {
      this.bancoService.updateBanco(this.banco.id, this.banco).subscribe(
        data => {
          this.mensagemPadrao.showMessage('Informações da instituição bancária atualizado com sucesso.')
          this.router.navigate(['/banco-consulta'])
        },
        error => {
          console.log(error)
          this.mensagemPadrao.showMessage('Ocorreu um problema ao efetuar a exclusão do banco.' +
            'Por favor analisar o console.')
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
