import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaCorrenteUpdateComponent } from './conta-corrente-update.component';

describe('ContaCorrenteUpdateComponent', () => {
  let component: ContaCorrenteUpdateComponent;
  let fixture: ComponentFixture<ContaCorrenteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaCorrenteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaCorrenteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
