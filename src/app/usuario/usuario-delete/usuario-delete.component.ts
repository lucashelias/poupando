import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/role/role.model';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';
import { UsuarioService } from '../usuario-detalhe/usuario.service';

interface Status {
  tipo: string;
  descricao: string;
}

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit { 

  usuario: Usuario 
  step = 0;
  disable = true;

  roles: Role[] = [
    { id: 1, name: 'Usuário' },
    { id: 2, name: 'Moderador' },
    { id: 3, name: 'Administrador' }
  ];
 
  user_status: Status[] = [
    { tipo: "A", descricao: "Ativo" },
    { tipo: "I", descricao: "Inativo" }
  ]

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private mensagemPadrao: MensagensPadraoService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.usuarioService.get(id).subscribe(usuario => {
      this.usuario = usuario
    }, error => {
      console.log(error)
    })
  }

  deletarUsuario(): void {

    if(this.usuario.nome === "Administrador" || this.usuario.nome === "Demonstração"){

      this.mensagemPadrao.showMessage('Este usuário é administrativo e não pode ser excluído!!!')

    }else{
      this.usuarioService.delete(this.usuario.id).subscribe(usuario => {
        this.mensagemPadrao.showMessage('Usuário deletado com sucesso!')
        this.router.navigate(['/usuario-detalhe'])
      }, error => {
        console.log(error)
        this.mensagemPadrao.showMessage('Ocorreu um erro no processo de deleção!')
      })
    }
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
