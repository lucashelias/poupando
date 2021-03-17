import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaInvestimentoDeleteComponent } from './categoria-investimento-delete.component';

describe('CategoriaInvestimentoDeleteComponent', () => {
  let component: CategoriaInvestimentoDeleteComponent;
  let fixture: ComponentFixture<CategoriaInvestimentoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriaInvestimentoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaInvestimentoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
