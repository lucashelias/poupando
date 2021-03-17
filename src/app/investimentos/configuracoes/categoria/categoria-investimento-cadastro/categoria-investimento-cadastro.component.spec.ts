import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaInvestimentoCadastroComponent } from './categoria-investimento-cadastro.component';

describe('CategoriaInvestimentoCadastroComponent', () => {
  let component: CategoriaInvestimentoCadastroComponent;
  let fixture: ComponentFixture<CategoriaInvestimentoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaInvestimentoCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaInvestimentoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
