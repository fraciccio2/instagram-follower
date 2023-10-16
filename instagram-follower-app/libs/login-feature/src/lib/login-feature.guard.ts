import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const LoginFeatureGuard: CanActivateFn = () => {
  const router = inject(Router);
  let userStr = localStorage.getItem('auth');
  if (userStr) {
    const userConfig = JSON.parse(userStr);
    if (!userConfig) {
      return true;
    }
    router.navigate(['/home']).catch((e) => console.error(e));
    return false;
  }
  return true;
};
