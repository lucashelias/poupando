import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../usuario-detalhe/usuario.service';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'Usuário cadastrado com sucesso!',
}
];

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
  alerts: Alert[];
  alertaMensagem = false;

  constructor(public dialog: MatDialog,
              private modalService: NgbModal, 
              private usuarioService: UsuarioService, 
              private router: Router) { }

  ngOnInit(): void {

  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  cancelarCadastro(): void {
    this.router.navigate(["/usuario-detalhe"])

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogConfirmation);

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(["/usuario-detalhe"])
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

    // Validação do status do usuário
    if (status == null) {
      status = 'S'
    } else if (this.status == '1') {
      this.status = 'S'
    } else {
      this.status = 'N'
    }
    this.usuario.status = status;

    // validação dos campos obrigatórios

    if (this.usuario.nome.length == 0) {
      this.messege.push("É obrigatório informar o nome do usuário")
      this.alertaMensagem = true;
    }
    if (this.usuario.usuario.length == 0) {
      this.messege.push('É obrigatório informar um usuário')
      this.alertaMensagem = true;
    }
    if (this.usuario.senha.length == 0) {
      this.messege.push("É obrigatório informar uma senha")
      this.alertaMensagem = true;
    }
    if (this.usuario.email.length == 0) {
      this.messege.push("É obrigatório informar um e-mail")
      this.alertaMensagem = true;
    }

    if (this.messege.length == 0) {
      // EFETUA A INSERÇÂO NA BASE DE DADOS
      this.usuarioService.create(this.usuario)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
            this.modalService.open(response, { size: 'sm' });
          },
          error => {
            console.log(error);
            this.modalService.open(error, { size: 'sm' });
          });
    }
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
export class DialogConfirmation {}
