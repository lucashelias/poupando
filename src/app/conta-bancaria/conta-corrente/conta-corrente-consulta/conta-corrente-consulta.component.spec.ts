import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaCorrenteConsultaComponent } from './conta-corrente-consulta.component';

describe('ContaCorrenteConsultaComponent', () => {
  let component: ContaCorrenteConsultaComponent;
  let fixture: ComponentFixture<ContaCorrenteConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaCorrenteConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaCorrenteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
