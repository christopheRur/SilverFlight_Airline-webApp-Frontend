import { TestBed } from '@angular/core/testing';

import { SliverServiceService } from './sliver-service.service';

describe('SliverServiceService', () => {
  let service: SliverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
