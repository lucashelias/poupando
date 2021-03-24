import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContaCorrenteConsultaComponent } from './tipo-conta-corrente-consulta.component';

describe('TipoContaCorrenteConsultaComponent', () => {
  let component: TipoContaCorrenteConsultaComponent;
  let fixture: ComponentFixture<TipoContaCorrenteConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoContaCorrenteConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoContaCorrenteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
