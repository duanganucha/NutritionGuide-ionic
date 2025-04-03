import { TestBed } from '@angular/core/testing';

import { AngufirestoreService } from './angufirestore.service';

describe('AngufirestoreService', () => {
  let service: AngufirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngufirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
