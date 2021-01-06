import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { exit } from 'process';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../usuario-detalhe/usuario.service';

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
  messege: string = null;
  status: string = null;

  constructor(private modalService: NgbModal, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  salvarUsuario(nome, sobrenome, usuario, senha, email): void {
    
    this.messege = null

    this.usuario.nome = nome;
    this.usuario.sobrenome = sobrenome;
    this.usuario.usuario = usuario;
    this.usuario.senha = senha;
    this.usuario.email = email;
    
    // Validação do status do usuário
    if(status == null){
      status = 'S'
    }else if(this.status = '1'){
      this.status = 'S'
    }else{
      this.status = 'N'
    }
    this.usuario.status = status;

    // validação dos campos obrigatórios

    if(this.usuario.senha == null){
      this.messege = "É obrigatório informar uma senha"
      exit;

    }else if(this.usuario.usuario == null){
      this.messege = 'É obrigatório informar um usuário'
      exit;


    }else if(this.usuario.nome == null){
      this.messege = "É obrigatório informar o nome do usuário"
      exit;
    }

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
        if(this.email.hasError('required')) {
      return 'Este campo é obrigatório';
    }

    return this.email.hasError('email') ? 'Não é uum e-mail válido' : '';
  }

}
