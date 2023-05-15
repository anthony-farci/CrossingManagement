import { TestBed } from '@angular/core/testing';

import { RailroadCrossingsService } from './railroad-crossings.service';

describe('RailroadCrossingsService', () => {
  let service: RailroadCrossingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RailroadCrossingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
