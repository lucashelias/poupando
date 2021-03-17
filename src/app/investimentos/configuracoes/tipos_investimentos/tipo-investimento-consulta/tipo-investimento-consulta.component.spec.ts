import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoInvestimentoConsultaComponent } from './tipo-investimento-consulta.component';

describe('TipoInvestimentoConsultaComponent', () => {
  let component: TipoInvestimentoConsultaComponent;
  let fixture: ComponentFixture<TipoInvestimentoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoInvestimentoConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoInvestimentoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
