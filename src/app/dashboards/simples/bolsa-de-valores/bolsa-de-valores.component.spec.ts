import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsaDeValoresComponent } from './bolsa-de-valores.component';

describe('BolsaDeValoresComponent', () => {
  let component: BolsaDeValoresComponent;
  let fixture: ComponentFixture<BolsaDeValoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolsaDeValoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolsaDeValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
