import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { HomeFacade } from 'home-data-access';
import { filter, map, take, tap } from 'rxjs';

export const HomeUserFeatureGuard: CanActivateFn = (route) => {
  const homeFacade = inject(HomeFacade);
  const pk = route.params['id'];
  return homeFacade.user$.pipe(
    tap((user) => {
      if (!user && pk) {
        homeFacade.initUser(pk);
      }
    }),
    filter((user) => !!user),
    take(1),
    map((user) => !!user)
  );
};
