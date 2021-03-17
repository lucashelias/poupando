import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaInvestimentoConsultaComponent } from './categoria-investimento-consulta.component';

describe('CategoriaInvestimentoConsultaComponent', () => {
  let component: CategoriaInvestimentoConsultaComponent;
  let fixture: ComponentFixture<CategoriaInvestimentoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaInvestimentoConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaInvestimentoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
