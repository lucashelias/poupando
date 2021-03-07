import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/role/role.model';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { MensagensPadraoService } from 'src/app/_services/mensagens/mensagens-padrao.service';
import { RoleUserService } from 'src/app/_services/role/role-service.service';
import { RoleService } from 'src/app/_services/role/role.service';
import { UsuarioService } from '../usuario-detalhe/usuario.service';

interface Status {
  tipo: string;
  descricao: string;
}


@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  usuario: Usuario
  roles: Role[]
  usurioRole: Role
  submitted: false;
  alertaMensagem: false; 
  valorPermissao ="Administrador";

  user_status: Status[] = [
    { tipo: "A", descricao: "Ativo" },
    { tipo: "I", descricao: "Inativo" }
  ]
 
  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private roleService: RoleService,
    private roleUserService: RoleUserService,
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

    this.ConsultaRoles(); 
    //this.consultaVinuculoUsuarioRole();   
  }
 
  consultaVinuculoUsuarioRole(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.roleUserService.getUserRoleByID(id).subscribe(roleUser => {
      this.usurioRole = roleUser;
    }, error =>{
      console.log(error)
      this.mensagemPadrao.showMessage('Ocorreu um erro ao buscar informações de tipo de permissão do usuário')
    })
  }
  
  ConsultaRoles(): void {
    this.roleService.getAllRole().subscribe(
      (data: any) => {
        this.roles = data;
        console.log(data);
      },
      error => {
        console.log(error);
        this.mensagemPadrao.showMessage('Ocorreu um erro ao recuperar os tipos permissões da base de dados')
      });
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
