import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';

describe('Register1Service', () => {
  let service: RegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
