import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, } from '@angular/router';
import { Banco } from 'src/app/models/banco/banco.model';
import { BancoService } from 'src/app/_services/banco/banco.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';


interface Status {
  tipo: string;
  descricao: string;
}

@Component({
  selector: 'app-banco-delete',
  templateUrl: './banco-delete.component.html',
  styleUrls: ['./banco-delete.component.css']
})
export class BancoDeleteComponent implements OnInit {

  banco = new Banco;
  step = 0;
  banco_status: Status[] = [
    { tipo: "A", descricao: "Ativo" },
    { tipo: "I", descricao: "Inativo" }
  ]

  constructor(private router: Router, 
              private bancoService: BancoService,
              private route: ActivatedRoute,
              private mensagemPadrao: MensagensPadraoService ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    this.bancoService.getBancoByID(id).subscribe(
      data =>{
        this.banco = data;
    }, error =>{
      console.log(error)
      this.mensagemPadrao.showMessage('Ocorreu um erro ao recuperar as informações da instituição bancária. ID: ' + id)
    })
  }

  deletarBanco(): void{
    this.bancoService.deleteBanco(this.banco.id).subscribe(
      data => {
        if(data == 'OK'){
          this.mensagemPadrao.showMessage('Informações da instituição bancária excluida com sucesso.')
          this.router.navigate(['/banco-consulta'])
        }else{
          this.mensagemPadrao.showMessage(data)
        }
      }, 
      error => {
        console.log(error)
        this.mensagemPadrao.showMessage('Ocorreu um problema ao efetuar a exclusão do banco.'+ 
                                        ' Por favor analisar o console.')
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
