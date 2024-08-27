import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminRouteGuard } from './admin-route.guard';

describe('adminRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
