import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContaCorrenteDeleteComponent } from './tipo-conta-corrente-delete.component';

describe('TipoContaCorrenteDeleteComponent', () => {
  let component: TipoContaCorrenteDeleteComponent;
  let fixture: ComponentFixture<TipoContaCorrenteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoContaCorrenteDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoContaCorrenteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
