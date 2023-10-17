import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { HomeFacade } from 'home-data-access';
import { filter, map, take, tap } from 'rxjs';

export const HomeFeatureGuard: CanActivateFn = () => {
  const homeFacade = inject(HomeFacade);
  return homeFacade.infos$.pipe(
    tap((infos) => {
      const auth = localStorage.getItem('auth');
      const authObj = JSON.parse(auth ?? 'null');
      if (!infos && authObj) {
        homeFacade.initProfileInfos(authObj.username);
      }
    }),
    filter((infos) => !!infos),
    take(1),
    map((infos) => !!infos)
  );
};
