import { TestBed } from '@angular/core/testing';

import { DataReadService } from './data-read.service';

describe('DataReadService', () => {
  let service: DataReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
