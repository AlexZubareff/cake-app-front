import { CanActivateFn } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const adminRouteGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  
  if(userService.user?.role !== 'admin') {
   router.navigate(['/'])
  }
  return true; 
};
