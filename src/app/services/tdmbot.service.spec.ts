import { TestBed } from '@angular/core/testing';

import { TdmbotService } from './tdmbot.service';

describe('TdmbotService', () => {
  let service: TdmbotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TdmbotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
