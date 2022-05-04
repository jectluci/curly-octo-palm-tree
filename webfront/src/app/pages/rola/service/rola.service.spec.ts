import { TestBed } from '@angular/core/testing';

import { RolaService } from './rola.service';

describe('RolaService', () => {
  let service: RolaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
