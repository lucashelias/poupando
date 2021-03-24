import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContaCorrenteUpdateComponent } from './tipo-conta-corrente-update.component';

describe('TipoContaCorrenteUpdateComponent', () => {
  let component: TipoContaCorrenteUpdateComponent;
  let fixture: ComponentFixture<TipoContaCorrenteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoContaCorrenteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoContaCorrenteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
