import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoConsultaComponent } from './banco-consulta.component';

describe('BancoConsultaComponent', () => {
  let component: BancoConsultaComponent;
  let fixture: ComponentFixture<BancoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancoConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
