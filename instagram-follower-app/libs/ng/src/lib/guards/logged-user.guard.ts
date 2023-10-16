import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const LoggedUserGuard: CanActivateFn = () => {
  const router = inject(Router);
  const userStr = localStorage.getItem('auth');
  if (userStr) {
    const userConfig = JSON.parse(userStr);
    if (userConfig) {
      return true;
    }
    router.navigate(['/login']).catch((e) => console.error(e));
    return false;
  }
  router.navigate(['/login']).catch((e) => console.error(e));
  return false;
};
