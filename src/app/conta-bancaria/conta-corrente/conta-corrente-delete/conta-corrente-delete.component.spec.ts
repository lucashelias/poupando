import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaCorrenteDeleteComponent } from './conta-corrente-delete.component';

describe('ContaCorrenteDeleteComponent', () => {
  let component: ContaCorrenteDeleteComponent;
  let fixture: ComponentFixture<ContaCorrenteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaCorrenteDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaCorrenteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
