import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoInvestimentoCadastroComponent } from './tipo-investimento-cadastro.component';

describe('TipoInvestimentoCadastroComponent', () => {
  let component: TipoInvestimentoCadastroComponent;
  let fixture: ComponentFixture<TipoInvestimentoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoInvestimentoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoInvestimentoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
