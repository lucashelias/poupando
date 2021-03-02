import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';
import { UsuarioService } from '../usuario-detalhe/usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  usuario: Usuario

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private mensagemPadrao: MensagensPadraoService) { }
  step = 0;

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id')
    this.usuarioService.get(id).subscribe(usuario => {
      this.usuario = usuario
    }, error => {
      console.log(error)
      this.mensagemPadrao.showMessage('Ocorreu um erro no momento de atualizar o usuário!')
    })
  }

  atualizarUsuario():void{
    this.usuarioService.update(this.usuario.id, this.usuario).subscribe(usuario =>{
      this.mensagemPadrao.showMessage('Usuário atualizado com sucesso!!!')
      this.router.navigate(['/usuario-detalhe'])
    }, error =>{
      console.log(error)
      this.mensagemPadrao.showMessage('Ocorreu um erro no momento de atualizar o usuário!')
    })
  }

  cancelar(): void {
    this.router.navigate(['/usuario-detalhe'])
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
