import { LoaderFacade } from './+state/loader/loader.facade';
import { finalize, MonoTypeOperatorFunction, pipe } from 'rxjs';

export function endLoader<T>(
  loaderFacade: LoaderFacade
): MonoTypeOperatorFunction<T> {
  return pipe(
    finalize(() => {
      loaderFacade.stopLoader();
    })
  );
}
