import { TestBed } from '@angular/core/testing';

import { MensagensPadraoService } from './mensagens-padrao.service';

describe('MensagensPadraoService', () => {
  let service: MensagensPadraoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagensPadraoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
