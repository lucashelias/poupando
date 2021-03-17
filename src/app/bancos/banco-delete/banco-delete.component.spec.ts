import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoDeleteComponent } from './banco-delete.component';

describe('BancoDeleteComponent', () => {
  let component: BancoDeleteComponent;
  let fixture: ComponentFixture<BancoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
