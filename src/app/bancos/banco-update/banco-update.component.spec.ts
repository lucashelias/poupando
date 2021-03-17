import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoUpdateComponent } from './banco-update.component';

describe('BancoUpdateComponent', () => {
  let component: BancoUpdateComponent;
  let fixture: ComponentFixture<BancoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
