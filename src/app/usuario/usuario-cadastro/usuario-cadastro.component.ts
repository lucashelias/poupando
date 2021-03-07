import { RepositionScrollStrategy } from '@angular/cdk/overlay';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Role } from 'src/app/models/role/role.model';
import { UserRole } from 'src/app/models/role/user_role.model';
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
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})


export class UsuarioCadastroComponent implements OnInit {

  step = 0;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  usuario = new Usuario;
  submitted = false;
  messege: string[] = [];
  status: string = null;
  alertaMensagem = false;
  user_role = new UserRole;
  tipo_status: '' = '';
  tipo_role: '' = '';
  roles: Role[] = [
    { id: 1, name: 'Usuário' },
    { id: 2, name: 'Moderador' },
    { id: 3, name: 'Administrador' }
  ];

  user_status: Status[] = [
    { tipo: "A", descricao: "Ativo" },
    { tipo: "I", descricao: "Inativo" }
  ]

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor(public dialog: MatDialog,
    private modalService: NgbModal,
    private roleUserService: RoleUserService,
    private usuarioService: UsuarioService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private mensagemPadrao: MensagensPadraoService) { }

  ngOnInit(): void {

  }

   openDialog() {
    const dialogRef = this.dialog.open(DialogConfirmation);

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  ConsultaRoles(): void {
    this.roleUserService.getAllRole().subscribe(
      (data: any) => {
        this.roles = data.lista;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  salvarUsuario(nome, sobrenome, usuario, senha, email): void {

    this.messege = [];
    this.alertaMensagem = false;

    this.usuario.nome = nome;
    this.usuario.sobrenome = sobrenome;
    this.usuario.usuario = usuario;
    this.usuario.senha = senha;
    this.usuario.email = email;
    this.usuario.status = this.tipo_status;

    // validação dos campos obrigatórios

    if (this.usuario.nome.length == 0) {
      this.messege.push("É obrigatório informar o nome do usuário")
      this.alertaMensagem = true;
    }
    if (this.usuario.usuario.length == 0) {
      this.messege.push('É obrigatório informar o usuário')
      this.alertaMensagem = true;
    }
    if (this.usuario.senha.length == 0) {
      this.messege.push("É obrigatório informar a senha")
      this.alertaMensagem = true;
    }
    if (this.usuario.email.length == 0) {
      this.messege.push("É obrigatório informar um e-mail")
      this.alertaMensagem = true;
    }
    if (this.tipo_status == '') {
      this.messege.push("É obrigatório informar se o usuário se encontrará ativo ou inativo.")
      this.alertaMensagem = true;
    }
    if (this.tipo_role == '') {
      this.messege.push("É obrigatório um tipo de permissão para o usuário.")
      this.alertaMensagem = true;
    }

    if (this.messege.length == 0) {
      // EFETUA A INSERÇÂO NA BASE DE DADOS
      this.usuarioService.create(this.usuario)
        .subscribe(
          response => {
            this.usuario = response
            console.log(response);
            //this.openConfirmation()
            this.vincularUsuarioRole(this.usuario.id,this.tipo_role);
            this.router.navigate(['/usuario-detalhe'])

          },
          error => {
            console.log(error);
            //this.modalService.open(error, { size: 'sm' });
          });
    }
  }

  openConfirmation() {
    this._snackBar.open('Usuário cadastrado com sucesso!!!', '', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  vincularUsuarioRole(id_usuario, id_permissao) {

    this.user_role.usuarioId = id_usuario;
    this.user_role.roleId = id_permissao;

    this.roleUserService.createUserRole(this.user_role)
      .subscribe(
        response_role => {
          console.log(response_role);
          this.mensagemPadrao.showMessage('Usuário cadastrado com sucesso!!!')
         
        },
        error => {
          console.log('error');
          this.mensagemPadrao.showMessage('Ocorreu um erro na criação do usuário!!!')
        });
  }

  cancelar(content): void {
    this.modalService.open(content, { size: 'sm' });
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

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Este campo é obrigatório';
    }

    return this.email.hasError('email') ? 'Não é uum e-mail válido' : '';
  }

}

@Component({
  selector: 'dialog-confirmation',
  templateUrl: 'dialog-confirmation.html',
})
export class DialogConfirmation {

  router: Router;

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmation>) {
    dialogRef.disableClose = true;
  }

  cancelarCadastro(): void {
    this.dialogRef.close();
  }
}
