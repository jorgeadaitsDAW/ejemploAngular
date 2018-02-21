import { TestBed, inject } from '@angular/core/testing';

import { ChusqrService } from './chusqr.service';

describe('ChusqrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChusqrService]
    });
  });

  it('should be created', inject([ChusqrService], (service: ChusqrService) => {
    expect(service).toBeTruthy();
  }));
});
