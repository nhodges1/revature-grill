import { TestBed } from '@angular/core/testing';

import { Register1Service } from './register1.service';

describe('Register1Service', () => {
  let service: Register1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Register1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
