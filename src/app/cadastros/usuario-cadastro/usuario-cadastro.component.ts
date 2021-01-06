import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  step = 0;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { 
  }

  salvarUsuario(): void{

  }

  cancelar(content): void{
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
