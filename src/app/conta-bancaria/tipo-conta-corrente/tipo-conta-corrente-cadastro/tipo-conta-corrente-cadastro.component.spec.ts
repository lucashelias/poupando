import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContaCorrenteCadastroComponent } from './tipo-conta-corrente-cadastro.component';

describe('TipoContaCorrenteCadastroComponent', () => {
  let component: TipoContaCorrenteCadastroComponent;
  let fixture: ComponentFixture<TipoContaCorrenteCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoContaCorrenteCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoContaCorrenteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
