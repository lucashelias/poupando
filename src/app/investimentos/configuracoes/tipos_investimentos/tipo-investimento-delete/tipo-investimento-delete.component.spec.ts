import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoInvestimentoDeleteComponent } from './tipo-investimento-delete.component';

describe('TipoInvestimentoDeleteComponent', () => {
  let component: TipoInvestimentoDeleteComponent;
  let fixture: ComponentFixture<TipoInvestimentoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoInvestimentoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoInvestimentoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
