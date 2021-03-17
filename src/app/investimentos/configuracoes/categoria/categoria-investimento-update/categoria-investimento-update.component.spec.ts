import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaInvestimentoUpdateComponent } from './categoria-investimento-update.component';

describe('CategoriaInvestimentoUpdateComponent', () => {
  let component: CategoriaInvestimentoUpdateComponent;
  let fixture: ComponentFixture<CategoriaInvestimentoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaInvestimentoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaInvestimentoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
