import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoInvestimentoUpdateComponent } from './tipo-investimento-update.component';

describe('TipoInvestimentoUpdateComponent', () => {
  let component: TipoInvestimentoUpdateComponent;
  let fixture: ComponentFixture<TipoInvestimentoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoInvestimentoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoInvestimentoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
