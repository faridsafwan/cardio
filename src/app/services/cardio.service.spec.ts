import { TestBed, inject } from '@angular/core/testing';

import { CardioService } from './cardio.service';

describe('CardioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardioService]
    });
  });

  it('should be created', inject([CardioService], (service: CardioService) => {
    expect(service).toBeTruthy();
  }));
});
