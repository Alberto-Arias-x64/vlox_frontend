import { TestBed } from '@angular/core/testing';

import { ReadyGuard } from './ready.guard';

describe('ReadyGuard', () => {
  let guard: ReadyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ReadyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
