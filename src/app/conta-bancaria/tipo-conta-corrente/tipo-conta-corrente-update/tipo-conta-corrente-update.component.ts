import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipo_conta_corrente } from 'src/app/models/banco/tipo-conta_corrente.model';
import { TipoContaCorrenteService } from 'src/app/_services/conta-bancaria/tipo-conta-corrente.service';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';

@Component({
  selector: 'app-tipo-conta-corrente-update',
  templateUrl: './tipo-conta-corrente-update.component.html',
  styleUrls: ['./tipo-conta-corrente-update.component.css']
})
export class TipoContaCorrenteUpdateComponent implements OnInit {

  tipo_conta = new Tipo_conta_corrente
  step = 0

  constructor(private tipoContaCorrenteService: TipoContaCorrenteService,
    private router: Router,
    private route: ActivatedRoute,
    private mensagenPadrao: MensagensPadraoService) { }

  ngOnInit(): void {
    this.consultarTipoConta()
  }

  consultarTipoConta(): void{
    const id = this.route.snapshot.paramMap.get('id')

    this.tipoContaCorrenteService.get_tipo_conta_correnteByID(id).subscribe(
      data =>{
        this.tipo_conta = data
      }, error =>{
        this.mensagenPadrao.showMessage('Ocorreu um erro ao buscar as informações do Tipo Conta. ID = ' + id)
        console.log(error)
      }
    )
  }

  alterarTipoConta(): void{
    this.tipoContaCorrenteService.update_tipo_conta_corrente(this.tipo_conta.id, this.tipo_conta).subscribe(
      data =>{
        this.mensagenPadrao.showMessage('Dados alterados com sucesso!!!')
        this.router.navigate(['tipo-conta-corrente-consulta'])
      }, error =>{
        this.mensagenPadrao.showMessage('Ocorreu um erro ao atualizar as informações! Por favor valide o console!')
        console.log(error)
      }
    )
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
