import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usuario.CadastroComponent } from './usuario.cadastro.component';

describe('Usuario.CadastroComponent', () => {
  let component: Usuario.CadastroComponent;
  let fixture: ComponentFixture<Usuario.CadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usuario.CadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usuario.CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
